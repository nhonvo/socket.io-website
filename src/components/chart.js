
// <style>
//     table {
//         table-layout: fixed;
//         width: 100%;
//         text-align: center;
//         padding: 5px;
//         font-size: 1.5vw;
//         border-collapse: separate;
//         border-spacing: 10px;
//     }

//     td {
//         width: 10%;
//         border: 4px solid rgba(255, 255, 255, 0.5);
//     }

//     button {
//         background: rgba(255, 255, 255, 0.5);
//         width: 90%;
//         height: 90%;
//         text-align: center;
//         padding: 5px;
//         font-size: 2.5vw;
//         outline: none;
//     }

//     .diphthong-cell {
//         background: rgba(0, 90, 255, 0.5);
//     }

//     .monophthong-cell {
//         background: rgba(255, 0, 0, 0.5);
//     }

//     .consonant-cell {
//         background: rgba(255, 255, 0, 0.5);
//     }
// </style>

// <body>
//     <table>
//         <tr id="row1">
//             <th id="column1"></th>
//             <th id="column2">monophthongs</th>
//             <th id="column3"></th>
//             <th id="column4"></th>
//             <th id="column5"></th>
//             <th id="column6">diphthongs</th>
//             <th id="column7"></th>
//             <th id="column8"></th>
//             <th id="column9"></th>
//         </tr>
//         <tr id="row2">
//             <td><strong>vowels</strong></td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlaySheep()">i:</button><br />sh<u><strong>ee</strong></u>p</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayShip()">ɪ</button><br />sh<u><strong>i</strong></u>p</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayGood()">ʊ</button><br />g<u><strong>oo</strong></u>d</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayShoot()">u:</button><br />sh<u><strong>oo</strong></u>t</td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayHere()">ɪə</button><br />h<u><strong>ere</strong></u></td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayWait()">eɪ</button><br />w<u><strong>ai</strong></u>t</td>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr id="row3">
//             <td></td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayBed()">e</button><br />b<u><strong>e</strong></u>d</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayTeacher()">ə</button><br />teach<u><strong>e</strong></u>r</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayBird()">ɜ:</button><br />b<u><strong>ir</strong></u>d</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayDoor()">ɔ:</button><br />d<u><strong>oo</strong></u>r</td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayTourist()">ʊə</button><br />t<u><strong>ou</strong></u>rist</td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayBoy()">ɔɪ</button><br />b<u><strong>oy</strong></u></td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayShow()">əʊ</button><br />sh<u><strong>ow</strong></u></td>
//             <td></td>
//         </tr>
//         <tr id="row4">
//             <td></td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayCat()">æ</button><br />c<u><strong>a</strong></u>t</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayUp()">ʌ</button><br /><u><strong>u</strong></u>p</td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayFar()">ɑ:</button><br />f<u><strong>ar</strong></u></td>
//             <td class="monophthong-cell"><button type="button"
//                     onclick="PlayOn()">ɒ</button><br /><u><strong>o</strong></u>n</td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayHair()">eə</button><br />h<u><strong>air</strong></u></td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayMy()">aɪ</button><br />m<u><strong>y</strong></u></td>
//             <td class="diphthong-cell"><button type="button"
//                     onclick="PlayCow()">aʊ</button><br />c<u><strong>ow</strong></u></td>
//             <td></td>
//         </tr>
//         <tr id="row5" class="consonant-cell">
//             <td><strong>consonants</strong></td>
//             <td><button type="button" onclick="PlayPea()">p</button><br /><u><strong>p</strong></u>ea</td>
//             <td><button type="button" onclick="PlayBoat()">b</button><br /><u><strong>b</strong></u>oat</td>
//             <td><button type="button" onclick="PlayTea()">t</button><br /><u><strong>t</strong></u>ea</td>
//             <td><button type="button" onclick="PlayDog()">d</button><br /><u><strong>d</strong></u>og</td>
//             <td><button type="button" onclick="PlayCheese()">tʃ</button><br /><u><strong>ch</strong></u>eese</td>
//             <td><button type="button" onclick="PlayJune()">dʒ</button><br /><u><strong>J</strong></u>une</td>
//             <td><button type="button" onclick="PlayCar()">k</button><br /><u><strong>c</strong></u>ar</td>
//             <td><button type="button" onclick="PlayGo()">g</button><br /><u><strong>g</strong></u>o</td>
//         </tr>
//         <tr id="row6" class="consonant-cell">
//             <td></td>
//             <td><button type="button" onclick="PlayFly()">f</button><br /><u><strong>f</strong></u>ly</td>
//             <td><button type="button" onclick="PlayVideo()">v</button><br /><u><strong>v</strong></u>ideo</td>
//             <td><button type="button" onclick="PlayThink()">θ</button><br /><u><strong>th</strong></u>ink</td>
//             <td><button type="button" onclick="PlayThisaud()">ð</button><br /><u><strong>th</strong></u>is</td>
//             <td><button type="button" onclick="PlaySee()">s</button><br /><u><strong>s</strong></u>ee</td>
//             <td><button type="button" onclick="PlayZoo()">z</button><br /><u><strong>z</strong></u>oo</td>
//             <td><button type="button" onclick="PlayShall()">ʃ</button><br /><u><strong>sh</strong></u>all</td>
//             <td><button type="button" onclick="PlayTelevision()">ʒ</button><br />televi<u><strong>s</strong></u>ion</td>
//         </tr>
//         <tr id="row7" class="consonant-cell">
//             <td></td>
//             <td><button type="button" onclick="PlayMan()">m</button><br /><u><strong>m</strong></u>an</td>
//             <td><button type="button" onclick="PlayNow()">n</button><br /><u><strong>n</strong></u>ow</td>
//             <td><button type="button" onclick="PlaySing()">ŋ</button><br />si<u><strong>ng</strong></u></td>
//             <td><button type="button" onclick="PlayHat()">h</button><br /><u><strong>h</strong></u>at</td>
//             <td><button type="button" onclick="PlayLove()">l</button><br /><u><strong>l</strong></u>ove</td>
//             <td><button type="button" onclick="PlayRed()">r</button><br /><u><strong>r</strong></u>ed</td>
//             <td><button type="button" onclick="PlayWet()">w</button><br /><u><strong>w</strong></u>et</td>
//             <td><button type="button" onclick="PlayYes()">j</button><br /><u><strong>y</strong></u>es</td>
//         </tr>
//     </table>

//     <script>
//         var sheep = new Audio();
//         sheep.src = ".././audio/sheep.mp3";
//         function PlaySheep() {
//             sheep.play();
//         }

//         var ship = new Audio();
//         ship.src = ".././audio/ship.mp3";
//         function PlayShip() {
//             ship.play();
//         }

//         var good = new Audio();
//         good.src = ".././audio/good.mp3";
//         function PlayGood() {
//             good.play();
//         }

//         var shoot = new Audio();
//         shoot.src = ".././audio/shoot.mp3";
//         function PlayShoot() {
//             shoot.play();
//         }

//         var bed = new Audio();
//         bed.src = ".././audio/bed.mp3";
//         function PlayBed() {
//             bed.play();
//         }

//         var teacher = new Audio();
//         teacher.src = ".././audio/teacher.mp3";
//         function PlayTeacher() {
//             teacher.play();
//         }

//         var bird = new Audio();
//         bird.src = ".././audio/bird.mp3";
//         function PlayBird() {
//             bird.play();
//         }

//         var door = new Audio();
//         door.src = ".././audio/door.mp3";
//         function PlayDoor() {
//             door.play();
//         }

//         var cat = new Audio();
//         cat.src = ".././audio/cat.mp3";
//         function PlayCat() {
//             cat.play();
//         }

//         var up = new Audio();
//         up.src = ".././audio/up.mp3";
//         function PlayUp() {
//             up.play();
//         }

//         var far = new Audio();
//         far.src = ".././audio/far.mp3";
//         function PlayFar() {
//             far.play();
//         }

//         var on = new Audio();
//         on.src = ".././audio/on.mp3";
//         function PlayOn() {
//             on.play();
//         }

//         var here = new Audio();
//         here.src = ".././audio/here.mp3";
//         function PlayHere() {
//             here.play();
//         }

//         var wait = new Audio();
//         wait.src = ".././audio/wait.mp3";
//         function PlayWait() {
//             wait.play();
//         }

//         var tourist = new Audio();
//         tourist.src = ".././audio/tourist.mp3";
//         function PlayTourist() {
//             tourist.play();
//         }

//         var boy = new Audio();
//         boy.src = ".././audio/boy.mp3";
//         function PlayBoy() {
//             boy.play();
//         }

//         var show = new Audio();
//         show.src = ".././audio/show.mp3";
//         function PlayShow() {
//             show.play();
//         }

//         var hair = new Audio();
//         hair.src = ".././audio/hair.mp3";
//         function PlayHair() {
//             hair.play();
//         }

//         var my = new Audio();
//         my.src = ".././audio/my.mp3";
//         function PlayMy() {
//             my.play();
//         }

//         var cow = new Audio();
//         cow.src = ".././audio/cow.mp3";
//         function PlayCow() {
//             cow.play();
//         }

//         var pea = new Audio();
//         pea.src = ".././audio/pea.mp3";
//         function PlayPea() {
//             pea.play();
//         }

//         var boat = new Audio();
//         boat.src = ".././audio/boat.mp3";
//         function PlayBoat() {
//             boat.play();
//         }

//         var tea = new Audio();
//         tea.src = ".././audio/tea.mp3";
//         function PlayTea() {
//             tea.play();
//         }

//         var dog = new Audio();
//         dog.src = ".././audio/dog.mp3";
//         function PlayDog() {
//             dog.play();
//         }

//         var cheese = new Audio();
//         cheese.src = ".././audio/cheese.mp3";
//         function PlayCheese() {
//             cheese.play();
//         }

//         var june = new Audio();
//         june.src = ".././audio/june.mp3";
//         function PlayJune() {
//             june.play();
//         }

//         var car = new Audio();
//         car.src = ".././audio/car.mp3";
//         function PlayCar() {
//             car.play();
//         }

//         var go = new Audio();
//         go.src = ".././audio/go.mp3";
//         function PlayGo() {
//             go.play();
//         }

//         var fly = new Audio();
//         fly.src = ".././audio/fly.mp3";
//         function PlayFly() {
//             fly.play();
//         }

//         var video = new Audio();
//         video.src = ".././audio/video.mp3";
//         function PlayVideo() {
//             video.play();
//         }

//         var think = new Audio();
//         think.src = ".././audio/think.mp3";
//         function PlayThink() {
//             think.play();
//         }

//         var thisaud = new Audio();
//         thisaud.src = ".././audio/this.mp3";
//         function PlayThisaud() {
//             thisaud.play();
//         }

//         var see = new Audio();
//         see.src = ".././audio/see.mp3";
//         function PlaySee() {
//             see.play();
//         }

//         var zoo = new Audio();
//         zoo.src = ".././audio/zoo.mp3";
//         function PlayZoo() {
//             zoo.play();
//         }

//         var shall = new Audio();
//         shall.src = ".././audio/shall.mp3";
//         function PlayShall() {
//             shall.play();
//         }

//         var television = new Audio();
//         television.src = ".././audio/television.mp3";
//         function PlayTelevision() {
//             television.play();
//         }

//         var man = new Audio();
//         man.src = ".././audio/man.mp3";
//         function PlayMan() {
//             man.play();
//         }

//         var now = new Audio();
//         now.src = ".././audio/now.mp3";
//         function PlayNow() {
//             now.play();
//         }

//         var sing = new Audio();
//         sing.src = ".././audio/sing.mp3";
//         function PlaySing() {
//             sing.play();
//         }

//         var hat = new Audio();
//         hat.src = ".././audio/hat.mp3";
//         function PlayHat() {
//             hat.play();
//         }

//         var love = new Audio();
//         love.src = ".././audio/love.mp3";
//         function PlayLove() {
//             love.play();
//         }

//         var red = new Audio();
//         red.src = ".././audio/red.mp3";
//         function PlayRed() {
//             red.play();
//         }

//         var wet = new Audio();
//         wet.src = ".././audio/wet.mp3";
//         function PlayWet() {
//             wet.play();
//         }

//         var yes = new Audio();
//         yes.src = ".././audio/yes.mp3";
//         function PlayYes() {
//             yes.play();
//         }
//     </script>