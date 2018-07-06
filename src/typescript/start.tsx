import {h, Component, render} from 'preact'
import '@mdi/font/css/materialdesignicons.css'
import 'particles.js'

setTimeout(() => {
    window['particlesJS'].load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded')
    })
}, 2000)

export class App extends Component {

    render() {
        return (
            <div class="fx">
                <div class="bg">
                    <div class="cog-bg"/>
                    <div class="rocket"/>
                    <div id="particles-js"/>
                    <div class="cog cog-1"/>
                    <div class="cog cog-2"/>
                    <div class="cog cog-3"/>
                    <div class="cog cog-4"/>
                </div>
                <div class="content">
                    <div id="logo"/>
                    <p>
                       We specialize in web-based business application development in a wide
                       range of industries: finance, digital media and ecommerce among others.
                       <br/><br/>
                       Mindmine consists of 4 seasoned IT veterans that combine over 75 years
                       of work experience. Although we are framework and language agnostic our
                       expertise circles mostly around Java, Scala, NodeJs in the backend
                       and React plus TypeScript in the front.
                    </p>
                </div>
                <ul class="footer">
                    <li><a href="tel:+358504033332"><i class="mdi mdi-phone"/>+358 50 403 3332</a></li>
                    <li><a href="mailto:info@mindmine.fi"><i class="mdi mdi-email"/>info@mindmine.fi</a></li>
                    <li><i class="mdi mdi-briefcase"/>Y-Tunnus: 2258370-2</li>
                    <li><i class="mdi mdi-copyright"/>2012-2018 Helsinki, Mindmine Oy</li>
                </ul>
            </div>
        )
    }
}

render(<App/>, document.body)
