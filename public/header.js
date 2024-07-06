class CommonHeader extends HTMLElement {
    //   constructor(){
    //     super()
    //   }
        connectedCallback(){
            this.innerHTML = `

            <h1 id="mainheading">Welcome to Projects</h1>
    <header>
        <nav>
            <ul class="menu">
                <li class="navanchor"><a  href="resume.html">Basic Resume</a></li>
                <li class="navanchor"><a  href="feedback.html">Feedback Form</a></li>
                <li class="navanchor"><a  href="documentation.html">Documentation Sample</a></li>
                <li class="navanchor"><a  href="logSign.html">SignUp | Login</a></li>
                <li class="navanchor"><a  href="music player.html">Music Player</a></li>
                <li class="navanchor"><a  href="typing speed.html">Typing Speed Game</a></li>
                <li class="navanchor"><a  href="text editor.html">Text Editor</a></li>
                <li class="navanchor"><a  href="tic tac toe.html">Tic Tac Toe</a></li>
                <!-- <li class="navanchor"><a  href="">Photography</a></li> -->
                
                <li class="navanchor"><a  href="person counter.html">Person Counter</a></li>
                <li class="navanchor"><a  href="tribute page.html">Tribute Page</a></li>
                
              </ul>
        </nav>
      </header>

            `
            }
        }
        customElements.define('common-header',CommonHeader)

        const textElement = document.getElementById("mainheading");
    const text ="Welcome To Projects"
    let index = 1;
    
    const writeText = () => {
      textElement.innerText = text.slice(0, index);
      index++;
    
      setTimeout(writeText, 60);
    };
    writeText();
    