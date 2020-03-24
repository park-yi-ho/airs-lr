import React, { Component, Fragment } from 'react';
import RandomMenu from './component/RamdomMenu';
import AniBox from './component/homeAnibox';
import Loading from './component/loading';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      food: '',
      img: '',
      url: '',
      info: [
        { id: 0, name: "어부사시가", food: "#생선구이 #찌개", img: "images/shops/fish.jpeg", url: "https://store.naver.com/restaurants/detail?entry=plt&id=1039016287&query=%EC%96%B4%EB%B6%80%EC%82%AC%EC%8B%9C%EA%B0%80" },
        { id: 1, name: "킷사서울", food: "#오므라이스 #덮밥", img: "images/shops/egg.jpeg", url: "https://store.naver.com/restaurants/detail?entry=plt&id=1218049409&query=%ED%82%B7%EC%82%AC%EC%84%9C%EC%9A%B8" },
        { id: 2, name: "버거킹", food: "#몬스터 와퍼 #콰트로 치즈", img: "images/shops/bugger.jpg", url: "https://store.naver.com/restaurants/detail?id=1318392263" },
        { id: 3, name: "안녕부산", food: "#돼지 국밥 #밀면", img: "images/shops/busan.jpeg", url: "https://store.naver.com/restaurants/detail?entry=plt&id=1862909287&query=%EC%95%88%EB%85%95%EB%B6%80%EC%82%B0" },
        { id: 4, name: "새마을식당", food: "#김치찌개 #고기", img: "images/shops/saema.jpeg", url: "https://store.naver.com/restaurants/detail?id=13374695" },
        { id: 5, name: "김가네", food: "#찌개 #분식 #여러가지 음식", img: "images/shops/kimga.jpeg", url: "https://store.naver.com/restaurants/detail?id=37274681" },
        { id: 6, name: "놀부 부대찌개", food: "#부대찌개", img: "images/shops/nolboo.jpeg", url: "https://store.naver.com/restaurants/detail?id=11803440" },
        { id: 7, name: "유가네 닭갈비", food: "#숯불 닭갈비", img: "images/shops/ugan.jpeg", url: "https://store.naver.com/restaurants/detail?id=20717283" },
        { id: 8, name: "삼백돈", food: "#돈까스 #스윙스", img: "images/shops/samback.jpeg", url: "https://store.naver.com/restaurants/detail?id=648063703" },
        { id: 9, name: "역전우동0410", food: "#우동 #모밀", img: "images/shops/udong.jpg", url: "https://store.naver.com/restaurants/detail?entry=plt&id=1413485809&query=%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%990410%20%EA%B4%80%EC%95%85%EA%B5%AC%EC%B2%AD%EC%A0%90" },
        { id: 10, name: "kfc", food: "#타워버거 #치킨", img: "images/shops/kfc.jpg", url: "https://store.naver.com/restaurants/detail?id=35609542" },
        { id: 11, name: "제주상회", food: "#고기국수 #고기국밥", img: "images/shops/jeju.jpg", url: "https://store.naver.com/restaurants/detail?id=1660727152" },
        { id: 12, name: "북촌손만두", food: "#피냉면 #만둣국", img: "images/shops/mandoo.jpeg", url: "https://store.naver.com/restaurants/detail?id=36803808" },
        { id: 13, name: "홍콩반점0410", food: "#짜장면 #짬뽕", img: "images/shops/hongkong.jpeg", url: "https://store.naver.com/restaurants/detail?id=31044565" },
        { id: 14, name: "도미노피자", food: "#피자 #스파게티", img: "images/shops/pizza.jpeg", url: "https://store.naver.com/restaurants/detail?id=11781768" },
        { id: 15, name: "맘스터치", food: "#싸이버거 #가성비갑", img: "images/shops/moms.jpg", url: "https://store.naver.com/restaurants/detail?id=762105912" },
        { id: 16, name: "카도야라멘", food: "#돈코츠라멘 #미소라멘", img: "images/shops/kadoya.jpeg", url: "https://store.naver.com/restaurants/detail?entry=pll&id=38276362&query=%EC%B9%B4%EB%8F%84%EC%95%BC%EB%9D%BC%EB%A9%98" },
        { id: 17, name: "동경산책", food: "#사케롤 정식 #롤", img: "images/shops/lol.jpeg", url: "https://store.naver.com/restaurants/detail?entry=plt&id=1588568877&query=%EB%8F%99%EA%B2%BD%EC%82%B0%EC%B1%85" },
        { id: 18, name: "황토방", food: "#보쌈정식 #냉면", img: "images/shops/hwangto.jpg", url: "https://store.naver.com/restaurants/detail?entry=pll&id=31936395&query=%ED%99%A9%ED%86%A0%EB%B0%A9" },
        { id: 19, name: "에그드랍", food: "#베이컨더블치즈 #jmt", img: "images/shops/eggdrop.jpeg", url: "https://store.naver.com/restaurants/detail?id=1418430547" }
      ]
    }
  }
  createMenu = (dataList) => {
    console.log(dataList);

  }
  selectMenu = (dataList) => {
    const randValue = Math.floor(Math.random() * this.state.info.length);
    console.log(randValue);
    this.setState({
      name: this.state.info.filter(num => num.id === randValue).map(v => v.name),
      food: this.state.info.filter(num => num.id === randValue).map(v => v.food),
      img: this.state.info.filter(num => num.id === randValue).map(v => v.img),
      url: this.state.info.filter(num => num.id === randValue).map(v => v.url)
    });
  }

  render() {
    const { info } = this.state;
    const { name, food, img, url } = this.state;

    return (
      <Fragment>
        <Loading />
        <AniBox />
        <div className="App-main">
          <h1>오늘의 점심은 ?</h1>
          <p>버튼을 눌러 보세요.</p>
          <RandomMenu onCreateMenu={this.createMenu} dataList={info} onSelectMenu={this.selectMenu} />
        </div>
        <div id="popup">
          <h1>오늘의..점심은..바로!!</h1>
          <div id="popmenu">
            <h1>{name}  <span>{food}</span></h1>
            <img src={img} alt="식당 이미지" />
            <p>＊ 본 이미지는 실제 매장 음식입니다.</p>
            <a target='_blank' href={url}>가게 정보 보러가기 </a>
            <div className="exit">닫기</div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default App;