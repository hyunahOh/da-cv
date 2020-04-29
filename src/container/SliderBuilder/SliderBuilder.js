import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './SliderBuilder.css';

class SliderBuilder extends Component{
  nextImage = () => {
    this.sliderPainting.slickNext();
    this.sliderSculpture.slickNext();
    this.sliderArticle.slickNext();
  }

  prevImage = () => {
    this.sliderPainting.slickPrev();
    this.sliderSculpture.slickPrev();
    this.sliderArticle.slickPrev();
  }
  
  render() {
      return (
          <React.Fragment>
            <button onClick={this.prevImage}>perv!</button>
            <button onClick={this.nextImage}>next!</button>
            <div>
              <div className="PaintingContainer">
                <Slider
                    arrows={false}
                    centerPadding={4}
                    ref={slider => (this.sliderPainting = slider)}
                    centerMode={true}
                >
                  <img src="https://ww.namu.la/s/6fb6b0f615f6891959241fde895d72fca81cc78aa75668ac2fc074397a3751591b434cc2498b328c82a03325bbeff5a7f45e88b9dc42396ae02f8419c5b398c86df573715a466d292c8b1362f63f2d6147e3d9f43405cba835acc25b796e7ce128c26ff66b93a4b6e5ffd9d0fa8b05a1"/>
                  <img src="https://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"/>
                  <img src="https://ww.namu.la/s/2cea5493509a798634fab4fe37a91f22305df247f51746aabbdc74345eb6e412acde4648d98831b05628a37c55bad139716e74278cc719eba3d8a5de49d72754537f57c7a5d9b86135cf81661baa69e50273dd4c512671c78b871f88c0d1bbc7"/>
                  <img src="https://lh3.googleusercontent.com/proxy/8ETgKgBVtGzL6kA1W8ZFtLPGCxmx7l5VWw1jKZ4zU53rOxSxZeqOEjzMj-nJMhcuQKNwUu5Zdscn_mWKKbd_FqydLqReQRcNbchd2MMdBgDh32on61FeXvZChgCxHcjOchDi6Xb2uthV9ZLbyxG40ScNdPwplccC869CE0IgA-caWfekTUY"/>
                  <img src="https://post-phinf.pstatic.net/MjAxOTAxMTBfMTc2/MDAxNTQ3MDgwMzA1NTg5.5rQnJ3qhpesN1T287am_uLsBVkqWgdxC4Qr74Fm59jwg.zklWDtmJyfOPa0enZMEtZeeqAxCjE49Tk9D3KnoLdqEg.JPEG/1.jpg?type=w1200"/>
                </Slider>
              </div>
              <div className="SculptureContainer">
                <Slider
                    arrows={false}
                    centerPadding={4}
                    ref={slider => (this.sliderSculpture = slider)}
                    centerMode={true}
                >
                  <img src="https://ww.namu.la/s/6fb6b0f615f6891959241fde895d72fca81cc78aa75668ac2fc074397a3751591b434cc2498b328c82a03325bbeff5a7f45e88b9dc42396ae02f8419c5b398c86df573715a466d292c8b1362f63f2d6147e3d9f43405cba835acc25b796e7ce128c26ff66b93a4b6e5ffd9d0fa8b05a1"/>
                  <img src="https://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"/>
                  <img src="https://ww.namu.la/s/2cea5493509a798634fab4fe37a91f22305df247f51746aabbdc74345eb6e412acde4648d98831b05628a37c55bad139716e74278cc719eba3d8a5de49d72754537f57c7a5d9b86135cf81661baa69e50273dd4c512671c78b871f88c0d1bbc7"/>
                  <img src="https://lh3.googleusercontent.com/proxy/8ETgKgBVtGzL6kA1W8ZFtLPGCxmx7l5VWw1jKZ4zU53rOxSxZeqOEjzMj-nJMhcuQKNwUu5Zdscn_mWKKbd_FqydLqReQRcNbchd2MMdBgDh32on61FeXvZChgCxHcjOchDi6Xb2uthV9ZLbyxG40ScNdPwplccC869CE0IgA-caWfekTUY"/>
                  <img src="https://post-phinf.pstatic.net/MjAxOTAxMTBfMTc2/MDAxNTQ3MDgwMzA1NTg5.5rQnJ3qhpesN1T287am_uLsBVkqWgdxC4Qr74Fm59jwg.zklWDtmJyfOPa0enZMEtZeeqAxCjE49Tk9D3KnoLdqEg.JPEG/1.jpg?type=w1200"/>
                </Slider>
              </div>
              <div className="ArticleContainer">
                <Slider
                    arrows={false}
                    centerPadding={4}
                    ref={slider => (this.sliderArticle = slider)}
                    centerMode={true}
                >
                  <img src="https://ww.namu.la/s/6fb6b0f615f6891959241fde895d72fca81cc78aa75668ac2fc074397a3751591b434cc2498b328c82a03325bbeff5a7f45e88b9dc42396ae02f8419c5b398c86df573715a466d292c8b1362f63f2d6147e3d9f43405cba835acc25b796e7ce128c26ff66b93a4b6e5ffd9d0fa8b05a1"/>
                  <img src="https://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"/>
                  <img src="https://ww.namu.la/s/2cea5493509a798634fab4fe37a91f22305df247f51746aabbdc74345eb6e412acde4648d98831b05628a37c55bad139716e74278cc719eba3d8a5de49d72754537f57c7a5d9b86135cf81661baa69e50273dd4c512671c78b871f88c0d1bbc7"/>
                  <img src="https://lh3.googleusercontent.com/proxy/8ETgKgBVtGzL6kA1W8ZFtLPGCxmx7l5VWw1jKZ4zU53rOxSxZeqOEjzMj-nJMhcuQKNwUu5Zdscn_mWKKbd_FqydLqReQRcNbchd2MMdBgDh32on61FeXvZChgCxHcjOchDi6Xb2uthV9ZLbyxG40ScNdPwplccC869CE0IgA-caWfekTUY"/>
                  <img src="https://post-phinf.pstatic.net/MjAxOTAxMTBfMTc2/MDAxNTQ3MDgwMzA1NTg5.5rQnJ3qhpesN1T287am_uLsBVkqWgdxC4Qr74Fm59jwg.zklWDtmJyfOPa0enZMEtZeeqAxCjE49Tk9D3KnoLdqEg.JPEG/1.jpg?type=w1200"/>
 
                </Slider>
              </div>
            </div>
          </React.Fragment>
      )
  }
}

export default SliderBuilder;