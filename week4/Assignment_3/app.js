function Header() {
    return (
        <header>
            <nav>
                <div id ="nav_sitename">
                SHOW YOUR LIFE
                </div>
                    <div class="menu_toggle" id="mobile_menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="nav_list">
                    <li><a href="#">home</a></li>
                    <li><a href="#">查詢更多景點</a></li>
                    <li><a href="#">推薦項目</a></li>
                    <li><a href="#">Q & A</a></li>
                </ul> 
            </nav> 
        </header>
    )
}

// Ｗorld Componment
class World extends React.Component {
    ChangeMessage() {
        const goodtime_banner = document.getElementById("goodtime_banner");
        goodtime_banner.innerText = "🌏世界由你探索";
    };

    render() {
        return (
            <section id="welcome_banner" onClick={this.ChangeMessage}>
            <h1 id="goodtime_banner">精選景點</h1>
            </section>
        )
    }
}

// Content1-4
function Content1() {
    return (
        <section id="wrapper">
            <div id="section">
            <h2 class="section_title">給你最好的旅行體驗</h2>
            </div>
            <div id="section_contents">
                <div className="content">
                <img src="https://picsum.photos/1600/500?random=10" />
                  <p>～亞洲行程～</p>
                  </div>
                <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>～歐洲行程～</p>
                </div>
                <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>～美洲行程～</p>
                </div>
                <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>～東南亞行程～</p>
                </div>
              </div>
        </section>
    )
}

//Button Component
class Button extends React.Component {
    OpenHiddenContent() {
        const button = document.querySelector(".button");
        const hidden_contents = document.querySelector("#hidden_contents");
        button.addEventListener("click", () => {
            hidden_contents.style.display = "flex";
        });
    }

    render() {
        return (
            <div id="button">
                <input type="開啟旅行" value="Call to Action" onClick={this.OpenHiddenContent} />
            </div>
        )
    }
}

//Content5-8
function Content2() {
    return (
        <section id="hidden_contentse" style={{display:'none'}}>
            <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>旅遊規劃</p>
            </div>
            <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>機票好康</p>
            </div>
            <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>交通</p>
            </div>
            <div className="content">
                  <img src="https://picsum.photos/1600/500?random=10" />
                  <p>美食地圖</p>
            </div>
        </section>
    )
}

// Combine All
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <World />
                <Content1 />
                <Button />
                <Content2 />
            </div>
        )
    }
}