import {h, Component, render} from 'preact'
import 'particles.js'

export class App extends Component {

    render() {
        return (
            <div class="fx">
                <div class="bg">
                    <div class="cog"/>
                    <div id="particles-js"/>
                </div>
                <div class="content">
                    <div id="logo"/>
                    <p>
                       We specialize in web-based business application development in a wide
                       range of industries: finance, digital media, e-commerce among others.
                       <br/><br/>
                       Mindmine consists of 4 seasoned IT veterans that combine over 75 years
                       of work experience. Although we are framework and language agnostic our
                       expertise circles mostly around Java / Scala and NodeJs in the backend
                       and React in TypeScript in the front.
                    </p>
                </div>
            </div>
        )
    }
}

render(<App/>, document.body)

window['particlesJS'].load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});
