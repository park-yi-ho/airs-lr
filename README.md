__LR App (Lunch Recommandation Application)__
=========================================
__what is LR App?__
---------------
### this is a lunch recommendation application

> ### This app automatically select the lunch/dinner menu.<br>
> ### It helps people who are not good at choose menu.  :)
* * *
# __Tutorial__
## __1. MainPage__
<img src="./readmeImg/screenshot(1).png" width="60%" alt="mainScreenShot"></img>

> ### The above picture is a main page of LR-App.<br>
> ### Press the button in the middle of the picture, it makes you can check the results of random drawing.
## __2. ResultPage__
<img src="./readmeImg/screenshot(2).png" width="60%" alt="SubScreenShot"></img>

> ### This is a result of random drawing.<br>
> ### This app includes 20 restaurants list. The app automatically pick one of the restaurants.
>> # ※ __Restaurant List__
>> * __Kim Ga-ne__
>> * __Nolbu Budaejjigae (Korean soup)__
>> * __Domino Pizza__
>> * __Tokyo Mountain Walk__
>> * __Mom's Touch__
>> * __Burger King__
>> * __Bukchon Sonmandu (Dimsom)__
>> * __SamBackDon__
>> * __Saemaeul Restaurant__
>> * __a fisherman__ 
>> * __Kitsa Seoul__
>> * __Kadoyaramen__
>> * __Reverse Udon 0410__
>> * __Ugane Dakgalbi__
>> * __Hi Busan__
>> * __RedClay Room__
>> * __Jeju Corporation__
>> * __Egg Drop__
>> * __Hong Kong Banjeom__
>> * __KFC__
> ### The above list is a restaurant list which is nearby AIRS Medical.
* * *
# __Frequently Asked Questions__
>## Q1 : What is the reason of this app's loading speed is slow?
>## A1 : 'Cause I adjusted loading time to 6sec.
* * *
# __Code Review__
## __App.js__
```jsx
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      food: '',
      img: '',
      url: '',
      info: [...]
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
```
## the above code is App.js code. 
# __Constructor(props)__
```jsx
constructor(props) {
    super(props);
    this.state = {
      name: '', 
      food: '', 
      img: '', 
      url: '', 
      info: [...] 
    }
}
```
## Before implementing a function, define a state first. And create __name__, __food__, __image__, __Url__ variables, and an __array__ to hold restaurant information.
# __Function()__
```jsx
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
```
## Obtain a random id value from this function and stores the restaurant information in the array according to the id value in the variable. And in this way, enter a value in the `state` to execute the render() function.

# __Render()__
```jsx
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
```  
## I'll skip over the components and I'll explain later. Before explaining the components this is the code that excluded the components. First, define restaurant information placed in the `state` in different variables. These components structured the main page.
* * *
## __RandomMenu.js__
```jsx
class RandomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select_restaurant: ""
        }
    }
    Submit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreateMenu(this.state);

    }


    render() {
        return (
            <form onSubmit={this.Submit}>
                <button id="contents" onClick={this.props.onSelectMenu}></button>

            </form>
        );
    }
}
```
## Button and class (RandomMenu) made into separate components. It runs independently. As you can see in RandomMenu code, click the `button` to execute the function created in `App.js`. When you click the button, the `state` value of `App.js` changes and the result of the random draw appears on the screen.
***
## __loading.js__
```jsx
class Loading extends Component {
    render() {
        return (
            <div className="load-box">
                <div className="loading">Loading<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <div className="load">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
        );
    }
}
```
## Loading.js execute the loading page before the pages loaded. This code made with `jsx` elements and design with `Scss`. 
***
# __SASS (SCSS)__
## I use 'Scss' when I made this style sheet. I'm not familiar with using `Scss` yet. So if there's anything wrong or if there are any better ways please let me know.
# __variable__
```scss
// Variables
$windowMargin: 0;
$windowPadding: 0;
$headingcolor: white;
$infiniteAniAttr: infinite linear;
$homeAniAttr: 10s $infiniteAniAttr;
```
## First, in variable parts I defines the frequently used properties.

# @Mixin
```scss
@mixin position($x,$y,$z) {
    position: absolute;
    top: $x;
    left: $y;
    z-index: $z;
    @if  $x == 50% and $y == 50% {
        transform: translate(-50%,-50%);
    }
    @else if $x == 50%{
        transform: translateY(-50%);
    }
    @else if $y == 50%{
        transform: translateX(-50%);
    }
}

@mixin backgroundImg($path,$x:0,$y:0,$w:0,$h:0){
    background: {
        image: url($path);
        position: $x $y;
        size: $w $h;
    }
    background-repeat: no-repeat;
}

@mixin box-sizing($w:auto,$h:auto,$m:0,$p:0){
    width: $w;
    height: $h;
    margin: $m;
    padding: $p;
}

@mixin setFont($size:14px,$weight:none,$lineHeight:auto,$align:none,$color:black){
    font-size: $size;
    font-weight: $weight;
    line-height: $lineHeight;
    text-align: $align;
    color: $color;
}
```
## I used `@mixin` to define common attributes in one place to increase convenience. '@mixin`'s list is made up of
## __@Mixins__
* ### position()
* ### backgroundImg()
* ### box-sizing()
* ### setFont()

# __1. Position()__
```scss
@mixin position($x,$y,$z) {
    position: absolute;
    top: $x;
    left: $y;
    z-index: $z;
    @if  $x == 50% and $y == 50% {
        transform: translate(-50%,-50%);
    }
    @else if $x == 50%{
        transform: translateY(-50%);
    }
    @else if $y == 50%{
        transform: translateX(-50%);
    }
}
```
## `@mixin` defines the position value of the element. `@mixin` is more useful when aligning in the middle (easily set the position). As a basic argument, set `x`,`y`,`z` values, take positions of the elements.


 It can be useful for other projects, too!
# __2. backgroundImg()__
```scss
@mixin backgroundImg($path,$x:0,$y:0,$w:0,$h:0){
    background: {
        image: url($path);
        position: $x $y;
        size: $w $h;
    }
    background-repeat: no-repeat;
}
```
## The basic factor's of backgroundImg is influenced by these factor's (position, size, filepath). This function set the background image's factors. `@mixin` usually used to set position. In addition, @mixins can used to set `box-sizing()` , `setFont()`. 
***
