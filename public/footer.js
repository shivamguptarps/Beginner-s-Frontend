class CommonFooter extends HTMLElement {
//   constructor(){
//     super()
//   }
    connectedCallback(){
        this.innerHTML = `
          
    <style>
       

footer {
margin-top:5rem;
    color: #fff;
    border:13px solid #1a2557;
}

.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.column {
    width: 200px;
    margin: 10px;
    text-align: center;
}

.column h3 {
    font-size: 18px;
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
}

.column ul {
    list-style-type: none;
    padding: 0;
}

.column ul li {
    font-size: 14px;
    padding: 5px 0;
}

// .column ul li:first-child {
//     font-weight: bold;
// }

    </style>

    <footer>
        <div class="container">
            <div class="column">
                <h3>LANGUAGE</h3>
                <ul>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>C++</li>
                </ul>
            </div>
            <div class="column">
                <h3>DATA STRUCTURE</h3>
                <ul>
                    <li>ARRAY</li>
                    <li>STRING</li>
                    <li>LINKED LIST</li>
                </ul>
            </div>
            <div class="column">
                <h3>ALGORITHMS</h3>
                <ul>
                    <li>SORTING</li>
                    <li>SEARCHING</li>
                    <li>GREEDY</li>
                </ul>
            </div>
            <div class="column">
                <h3>WEB DEVELOPMENT</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
            </div>
        </div>
    </footer>



        `
        }
    }
    customElements.define('common-footer',CommonFooter)