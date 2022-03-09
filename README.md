<div id="top"></div>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/weareteamx/xbomber-node-community-edition">
    <img src="https://i.ibb.co/Kxfn3pJ/XBOMBER-Round.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">XBOMBER</h3>

  <p align="center">
    Open source community edition
    <br />
    <a href="https://github.com/WeAreTeamX/xbomber-node-community-edition/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#using-github-pages">Using Github Pages</a></li>
        <li><a href="#local-development">Local development</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Xbomber is the pioneer of sms and call bombers in Bangladesh. For a long time, this was a closed source project. But we ***Team X 1337*** have decided to make it open source so that everyone can gain knowledge from this project and create their own project from this github template. You can contribute by providing this project working APIs and removing the dead APIs. For more about contributing, follow the <a href="#contributing">Contributing</a> section.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [NodeJs](https://nodejs.org/)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The community edition of Xbomber is not a dynamic tool. It means, you can use this tool files directly in any of the ***static terminal***.

### Local development
1. Setup Your Enviroment
```
   apt update
   apt install nodejs
```
2. Clone the repository
   ```
   git clone https://github.com/WeAreTeamX/xbomber-node-community-edition.git
   ```
3. Change directory 
```
   cd xbomber-node-community-edition
```
4. Install node module 
```
   npm init
   npm i
```
5. To run this tool
```
   node xbomb.js
```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Edit APIs in the `api.json` to make the bomber work.
   ```json
   [
    {
      "method":"GET",
      "url": "https://your-api-endpoint/?phone=+88{maonumber}",
      "headers":{
        "User-Agents":"Mozilla/5.0 (Linux; Android 8.1.0; CPH1909) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36"
      }
    },
    {
      "method":"POST",
      "url":"https://your-api-endpoint/",
      "headers":{"Content-Type" : "application/x-www-form-urlencoded"},
      "data":"phone={maonumber}"
    }    
    
    ]
   ```

_For more examples, please refer to the [api.json Example](https://github.com/WeAreTeamX/xbomber-node-community-edition/blob/main/assets/api.json)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License . See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

**MAO2116** ***(Maintainer)***
- [![Facebook Page](https://img.shields.io/badge/Facebook-Page-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/mao2116)&nbsp;
- [![GitHub followers](https://img.shields.io/github/followers/mao2116?style=social)](https://github.com/mao2116)&nbsp;
- [![Telegram](https://img.shields.io/badge/Telegram-ID-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/mao2116)&nbsp;

**Team X 1337**
- [![Facebook Group](https://img.shields.io/badge/Facebook-Group-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://web.facebook.com/groups/team.x.official.community)&nbsp;
- [![Facebook Page](https://img.shields.io/badge/Facebook-Page-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/ign0r3dh4x0r)&nbsp;
- [![Telegram](https://img.shields.io/badge/Telegram-Channel-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Teamx1337official)&nbsp;




<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/WeAreTeamX/xbomber-web-community-edition.svg?style=for-the-badge
[contributors-url]: https://github.com/WeAreTeamX/xbomber-web-community-edition/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/WeAreTeamX/xbomber-web-community-edition.svg?style=for-the-badge
[forks-url]: https://github.com/WeAreTeamX/xbomber-web-community-edition/network/members
[stars-shield]: https://img.shields.io/github/stars/WeAreTeamX/xbomber-web-community-edition.svg?style=for-the-badge
[stars-url]: https://github.com/WeAreTeamX/xbomber-web-community-edition/stargazers
[issues-shield]: https://img.shields.io/github/issues/WeAreTeamX/xbomber-web-community-edition.svg?style=for-the-badge
[issues-url]: https://github.com/WeAreTeamX/xbomber-web-community-edition/issues
[license-shield]: https://img.shields.io/github/license/WeAreTeamX/xbomber-web-community-edition.svg?style=for-the-badge
[license-url]: https://github.com/WeAreTeamX/xbomber-web-community-edition/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
