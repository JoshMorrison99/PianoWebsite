# Prime Pianist Website --> https://primepianist.com/

This website is used to download the prime pianist game I created.
&nbsp;  ![alt text](https://i.gyazo.com/20531c8f982928287224ca4a326fc679.png) 

This website also serves as an api endpoint for the [GameLauncher](https://github.com/JoshMorrison99/GameLauncher) I created using Qt. The website has an end point for the launcher verison number and game version number. If one of the end points are different from the GameLauncher's, then the GameLauncher will pull either, the newer version of the GameLauncher or the newer version of the game from this website.

&nbsp;  ![alt text](https://i.gyazo.com/3ec83d2296240e4d1c77360f670763e6.png)

#### The website stack:
* Ubuntu server hosted by digitalocean.
* frontend created in React
* backend created with node and express
* pm2 used for process management
* nginx used for reverse proxy
* Certbot used for SSL certificate
