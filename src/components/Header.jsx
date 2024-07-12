import React from 'react'

function Header() {
  return (
    <>
       <header>
        <nav>
            <div class="navbar" id="desktop-nav">
                <div class="container">
                    <div id="nav1">
                        <div class="top-left">
                            <ul>
                                <li><a href="#">Tab.az</a></li>
                                <li><a href="#">Bina.az</a></li>
                                <li><a href="#">Boss.az</a></li>
                            </ul>
                        </div>
                        <div class="top-right">
                            <ul>
                                <li><a href="tel:(012) 505-77-55" id="black">Dəstək: (012) 505-77-55</a></li>
                                <li><a href="">Yardım</a></li>
                                <li><a href="">RU</a></li>
                            </ul>
                            <span class="heart df">
                                <i class="fa-solid fa-heart"></i>
                                <p onclick="changePage('like')">Seçilmişlər</p>
                            </span>
                            <div class="user df" onclick="changePage('kabinet')">
                                <i class="fa-solid fa-circle-user"></i>
                                <p>Giriş</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-buttom">
                    <div class="container">
                        <div class="buttom-left">
                            <div class="logo">
                                <p><b><a href="index.htm">TURBO.AZ</a></b></p>
                            </div>
                            <ul>
                                <li><a href="">Bütün Elanlar</a></li>
                                <li><a href="">Salonlar</a></li>
                                <li><a href="">Moto</a></li>
                                <li id="drp"><a href="">Ehtiyat hissələri və aksesuarlar</a>
                                    <div class="down">
                                        <a href="">
                                            <p>Aksesuarlar</p>
                                        </a>
                                        <a href="">
                                            <p>Audio və video texnika</p>
                                        </a>
                                        <a href="">
                                            <p>Avtokosmetika və avtokimya</p>
                                        </a>
                                        <a href="">
                                            <p>Ehtiyyat hissələri</p>
                                        </a>
                                        <a href="">
                                            <p>GPS navigatorlar</p>
                                        </a>
                                        <a href="">
                                            <p>Qeydiyyat nişanları</p>
                                        </a>
                                        <a href="">
                                            <p>Siqnalzasiyalar</p>
                                        </a>
                                        <a href="">
                                            <p>Videoqeydiyyatçılar</p>
                                        </a>
                                        <a href="">
                                            <p>Şinlər disklər və təkərlər</p>
                                        </a>
                                        <a href="">
                                            <p>Digər</p>
                                        </a>
                                    </div>
                                </li>
                                <li id="drp"><a href="">İcarə</a>
                                    <div class="down">
                                        <a href="">
                                            <p>Avtomobillər</p>
                                        </a>
                                        <a href="">
                                            <p>Avtobus və mikroavtobuslar</p>
                                        </a>
                                        <a href="">
                                            <p>Motosiklet və mopedlər</p>
                                        </a>
                                        <a href="">
                                            <p>Xüsusi texnika</p>
                                        </a>
                                        <a href="">
                                            <p>Digər</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="buttom-right">
                            <button onclick="yeniElan()"><span>✚</span>Yeni elan</button>
                        </div>
                    </div>
                </div>
                <div class="yenielan">
                    <div class="container">
                        <h3>ELAN YERLƏŞDİRMƏK</h3>
                        <ul>
                            <li>Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna bilər.</li>
                            <li>Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng) ödənişlidir.</li>
                            <li>Elanınızı saytın ön sıralarında görmək üçün "İrəli çək" xidmətindən istifadə edin.</li>
                        </ul>
                        <form>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Marka <span>*</span></label>
                                    <select id="">
                                        <option value="">Seçin</option>
                                    </select>
                                </div>
                                <div class="pr-inside">
                                    <label>Yanacaq növü <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Model <span>*</span></label>
                                    <select id="">
                                        <option value="">Seçin</option>
                                    </select>
                                </div>
                                <div class="pr-inside">
                                    <label>Ötürücü <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Ban növü <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="pr-inside">
                                    <label>Sürətlər qutusu <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside" id="pr-inside">
                                    <label>Yürüş <span>*</span></label>
                                    <input type="text" /> <input type="radio" name="check" id="" />km <input type="radio"
                                        name="check" id="" />mi
                                </div>
                                <div class="pr-inside">
                                    <label>İl <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Rəng <span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="pr-inside">
                                    <label>Mühərrikin həcmi, sm<sup>3</sup><span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Qiymət <span>*</span></label>
                                    <input type="text" /> <input type="radio" name="check" id="" />AZN <input type="radio"
                                        name="check" id="" />USD <input type="radio" name="check" id="" />EUR
                                </div>
                                <div class="pr-inside">
                                    <label>Mühərrikin gücü, a.g.<span>*</span></label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product">
                                <div class="pr-inside">
                                    <label>Neçənci sahibisiniz?</label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="pr-inside">
                                    <label>Hansı bazar üçün yığılıb</label>
                                    <select id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="product2 product">
                                <label>Vəziyyəti</label>
                                <div>
                                    <input type="radio" name="" id="" />Vuruğu var 
                                    <p>Bir və ya bir neçə detalı dəyişdirilib və ya təmir olunub.</p>
                                </div>
                                <div>
                                    <input type="radio" name="" id=""/>Rənglənib
                                    <p>Bir və ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb.</p>
                                </div>
                                <div>
                                    <input type="radio" name="" id=""/>Qəzalı və ya ehtiyat hissələr üçün
                                    <p>Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəziyyətdədir.</p>
                                </div>
                            </div>
                            <div class="product">
                                <label>Yerlərin sayı</label>
                                <div class="cboxs">
                                    <input type="checkbox" name="check" /> 1
                                    <input type="checkbox" name="check" /> 2
                                    <input type="checkbox" name="check" /> 3
                                    <input type="checkbox" name="check" /> 4
                                    <input type="checkbox" name="check" /> 5
                                    <input type="checkbox" name="check" /> 6
                                    <input type="checkbox" name="check" /> 7
                                    <input type="checkbox" name="check" /> 8+
                                    <input type="checkbox" name="check" /> Qeyd olunmasın
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />Kreditlə
                                    <input type="checkbox" name="" id="" />Barter mümkündür
                                </div>
                            </div>
                            <div class="product">
                                <label>VIN-kod</label>
                                <input type="text" /><a href="">VIN-kodu haradan tapmaq olar?</a>
                            </div>
                            <div class="product">
                                <label>Əlavə məlumat</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </form>
                        <form class="form2">
                            <h2>Avtomobilin təchizatı</h2>
                            <div class="avto-checks">
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Yüngül lehimli disklər</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>ABS</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Lyuk</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Yağış sensoru</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Oturacaqların isidilməsi</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Yan pərdələr</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Mərkəzi qapanma</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Park radarı</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Kondisioner</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Dəri salon</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Ksenon lampalar</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Arxa görüntü kamerası</label>
                                </span>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    <label>Oturacaqların ventilyasiyası</label>
                                </span>
                            </div>
                        </form> <br />
                        <div class="sekiller">
                            <h2>Şəkillər</h2> <br />
                            <img src="img/yenielan.png" style="width: 100%;" /> / <br />
                            <div class="list df">
                                <ul>
                                    <li>Şəkillər Azərbaycan Respublikasının ərazisində çəkilməlidir.</li>
                                    <li>Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı işıqlandırılmış
                                        olmalı, şəkillərin üzərində loqotip və digər yazılar olmamalıdır. Skrinşotlar
                                        qəbul olunmur.</li>
                                </ul>
                                <ul>
                                    <li>Avtosalonda çəkilmiş şəkillər qeydiyyatdan keçmiş avtosalonun hesabından
                                        уerləşdirilməlidir.</li>
                                    <li>Şəxsi sahibi tərəfindən satılan nəqliyyat vasitəsinin şəkli avtosalon/rəsmi
                                        servis ərazisində və ya yaxınlığında çəkilməməlidir.</li>
                                </ul>
                            </div>
                        </div>
                        <form class="form3">
                            <span>
                                <h2 class="p10">Əlaqə</h2>
                                <p class="txtgray p10">Elan dərc olunduqdan sonra əlaqə məlumatları ilə bağlı heç bir
                                    dəyişiklik həyata keçirilmir.</p>
                            </span>
                            <label for="">Adınız <span>*</span></label>
                            <input type="text" name="" id="" /> <br />
                            <label for="">Şəhər <span>*</span></label>
                            <select name="" id="">
                                <option value="">Baki</option>
                            </select> <br />
                            <label for="">Email <span>*</span></label>
                            <input type="email" name="" id="" /> <br />
                            <label for="">Telefon nömrəsi <span>*</span></label>
                            <input type="text" /> <br />
                            <div class="end-right"><button>Davam et</button></div> <br />
                            <p class="txtgray p10">Elan yerləşdirərək, siz Turbo.az-ın <a href="">İstifadəçi
                                    razılaşması</a> və <a href="">Qaydaları</a> ilə razı olduğunuzu təsdiq edirsiniz</p>
                        </form>
                    </div>
                </div>
                <div class="main-search">
                    <div class="container">
                        <div class="inp-top">
                            <select id="marka">
                                <option value="" disabled selected hidden>Marka</option>
                                <option value="">✕ Sıfırla</option>
                            </select>
                            <select id="model">
                                <option value="" disabled selected hidden>Model</option>
                                <option value="">✕ Sıfırla</option>

                            </select>
                            <div class="btn-group df">
                                <button class="activate">Hamısı</button>
                                <button>Yeni</button>
                                <button>Sürülmüş</button>
                            </div>
                            <select name="" id="city">
                                <option value="" disabled selected hidden>Şəhər</option>
                                <option value="">✕ Sıfırla</option>
                            </select>
                        </div>
                        <div class="inp-top">
                            <div class="couple-inp df">
                                <input type="number" id="qiymet-min" placeholder="Qiymət, min." />
                                <input type="number" id="qiymet-max" placeholder="maks." />
                            </div>
                            <div class="vlt-group df">
                                <select id="valyuta">
                                    <option value="" disabled selected hidden> AZN</option>
                                </select>
                                <button onclick="choose(this,'kredit')" id="kreditBtn">Kredit</button>
                                <button onclick="choose(this,'barter')" id="barterBtn">Barter</button>
                            </div>
                            <select id="ban">
                                <option value="" disabled selected hidden>Ban növü</option>
                                <option value="">✕ Sıfırla</option>
                            </select>
                            <div class="slc-group df">
                                <select id="il-min">
                                    <option value="" disabled selected hidden>İl, min.</option>

                                </select>
                                <select id="il-max">
                                    <option value="" disabled selected hidden>maks.</option>
                                </select>
                            </div>
                        </div>
                        <div class="hidden-inp">
                            <div class="inp-top">
                                <select id="reng">
                                    <option value="" disabled selected hidden>Rəng</option>
                                </select>
                                <select id="yanacaq">
                                    <option value="" disabled selected hidden>Yanacaq növü</option>
                                </select>
                                <select id="oturucu">
                                    <option value="" disabled selected hidden>Ötürücü</option>
                                </select>
                                <select name="" id="suretlerqutusu">
                                    <option value="" disabled selected hidden>Sürətlər qutusu</option>
                                </select>
                            </div>
                            <div class="inp-top">
                                <div class="slc-group df">
                                    <select id="il-min">
                                        <option value="" disabled selected hidden>Həcm (sm), min.</option>
                                    </select>
                                    <select id="il-max">
                                        <option value="" disabled selected hidden>maks.</option>
                                    </select>
                                </div>
                                <div class="couple-inp df">
                                    <input type="number" placeholder="Güc (a. g.), min." />
                                    <input type="number" placeholder="maks." />
                                </div>
                                <div class="couple-inp df">
                                    <input type="number" placeholder="Yürüş (km), min." />
                                    <input type="number" placeholder="maks." />
                                </div>
                            </div>
                            <div class="inp-top">
                                <div class="btn-group df">
                                    <button class="activate">Hamısı</button>
                                    <button>Salonlar</button>
                                    <button>Şəxsi</button>
                                </div>
                                <select>
                                    <option value="" disabled selected hidden>Sahiblərin sayı</option>
                                </select>
                                <select>
                                    <option value="" disabled selected hidden>Yerlərin sayı</option>
                                </select>
                                <select>
                                    <option value="" disabled selected hidden>Hansı bazar üçün yığılıb</option>
                                </select>
                            </div>
                            <div class="inp-top vlt-group">
                                <button>Vuruğu yoxdur</button>
                                <button>Rənglənməyib</button>
                                <button>Yanlız qəzalı avtomobillər</button>
                                <select id="">
                                    <option value="" disabled selected hidden>Status</option>
                                </select>
                            </div>
                            <p class="avt p10">Avtomobilin təchizatı</p>
                            <div class="checkboxs vlt-group">
                                <button onclick="colorBtn(this)">Yüngül lehimli disklər</button>
                                <button onclick="colorBtn(this)">ABS</button>
                                <button onclick="colorBtn(this)">Lyuk</button>
                                <button onclick="colorBtn(this)">Yağış sensoru</button>
                                <button onclick="colorBtn(this)">Mərkəzi qapanma</button>
                                <button onclick="colorBtn(this)">Park radarı</button>
                                <button onclick="colorBtn(this)">Kondisioner</button>
                                <button onclick="colorBtn(this)">Oturacaqların isidilməsi</button>
                                <button onclick="colorBtn(this)">Dəri salon</button>
                                <button onclick="colorBtn(this)">Ksenon lampalar</button>
                                <button onclick="colorBtn(this)">Arxa görüntü kamerası</button>
                                <button onclick="colorBtn(this)">Yan pərdələr</button>
                                <button onclick="colorBtn(this)">Oturacaqların vertilyasiyasi</button>
                            </div>
                        </div>
                        <div class="mi-end">
                            <p>Bugün:<a href=""> 1641 yeni elan</a></p>
                            <div class="end-right df">
                                <span href="index.htm" onclick="reset()">Sıfırla</span>
                                <p href="" id="textA" onclick="showHiddenInp()">Daha çox filtr <i
                                        class="fa-solid fa-chevron-down"></i></p>
                                <button id="goster" onclick="masinlariFilterle()">Elanları göstər</button>
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
            <div id="mobile-nav">
                <div id="mobile-logo">
                    <a href="">
                        <h1 id="h1-red">turbo.az</h1>
                    </a>
                    <a href="">
                        <h1>bina.az</h1>
                    </a>
                    <a href="">
                        <h1>tap.az</h1>
                    </a>
                    <a href="" id="plus"></a>
                </div>
                <div id="selects">
                    <div id="all-marks" class="select" onclick="openNewSec('mark')">
                        <img src="img/redcar.png" alt="" />
                        <span>Bütün markalar</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id="filters" class="select" onclick="openNewSec('filt')">
                        <img src="img/filter.png" alt="" />
                        <span>Filtrlər</span>
                    </div>
                    <div id="moto" class="select">
                        <span>Moto</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <p id="elan">Bu gün: <a href="">1608 yeni elan</a> </p>
                </div>
                <div id="adds">
                    <img src="img/add.jpg" alt="" />
                </div>
            </div>
            <div id="links">
                <a href="">Kreditlə</a>
                <a href="">Barter</a>
                <a href="">Aksesuarlar</a>
                <a href="">Şinlər</a>
                <a href="">İcarə</a>
            </div>
        </nav>
    </header>
            <div id="filters-none">
                <div class="filter-header padding-header">
                    <i class="fa-solid fa-chevron-left" onclick="changePage('home')"></i>
                    <h2>Filtrlər</h2>
                    <span>Sıfırla</span>
                </div>
                <div class="filter-header padding-header">
                    <p>Şəhərlər</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="bg-gray"></div>
                <div id="mark-and-model">
                    <h5>Marka və model</h5>
                    <div id="marks">
                        <div class="mark1">
                            <img src="img/mercedes.png" alt="" />
                            <p>Mercedes</p>
                        </div>
                        <div class="mark1">
                            <img src="img/lada.png" alt="" />
                            <p>Lada (VAZ)</p>
                        </div>
                        <div class="mark1">
                            <img src="img/honda.png" alt="" />
                            <p>Hundai</p>
                        </div>
                        <div class="mark1">
                            <img src="img/kia.png" alt="" />
                            <p>Kia</p>
                        </div>
                        <div class="mark1">
                            <img src="img/toyota.png" alt="" />
                            <p>Toyota</p>
                        </div>
                        <div class="mark1">
                            <img src="img/bmw.png" alt="" />
                            <p>Bmw</p>
                        </div>
                        <div class="mark1">
                            <img src="img/opel.png" alt="" />
                            <p>Opel</p>
                        </div>
                        <div class="mark1">
                            <img src="img/Ford.png" alt="" />
                            <p>Ford</p>
                        </div>
                    </div>
                    <div class="btn">
                        <button class="butun-markalar">Bütün markaları göstər</button>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btns border-left">Hamısı</button>
                    <button class="btns">Yeni</button>
                    <button class="btns border-right">Sürülmüş</button>
                </div>
                <div id="filter-inputs">
                    <div class="filter-header filter-bottom">
                        <p>Ban növü</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="filter-header inputs">
                        <p>Yürüş,km</p>
                        <input type="text" id="yurus-min" placeholder="min." />
                        <input type="text" id="yurus-max" placeholder="max." />
                    </div>
                    <div class="filter-header inputs">
                        <p>il</p> <br />
                        <input type="text" id="il-min" placeholder="min." />
                        <input type="text" id="il-max" placeholder="max." />
                    </div>
                    <div class="filter-header inputs">
                        <p>Mühərrikin həcmi,sm<sup>3</sup> </p>
                        <input type="text" id="hecm-min" placeholder="min." />
                        <input type="text" id="hecm-max" placeholder="max." />
                    </div>
                    <div class="filter-header inputs">
                        <p>Mühərrikin gücü, a.g. </p>
                        <input type="text" id="guc-min" placeholder="min." />
                        <input type="text" id="guc-max" placeholder="max." />
                    </div>
                    <div class="filter-header filter-bottom">
                        <p>Rəng</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="filter-header filter-bottom">
                        <p>Hansı bazar üçün yığılıb</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="bg-gray"></div>
                </div>
                <div class="btn-groups">
                    <p>Status</p>
                    <span>yeni</span>
                    <div class="btn-groups-btns">
                        <button>Vacib deyil</button>
                        <button>Satışdadır</button>
                        <button>Sifarişlə</button>
                    </div>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Yanacaq növü</p>
                    <div class="btn-groups-btns">
                        <button>Vacib deyil</button>
                        <button>Benzin</button>
                        <button>Dizel</button>
                        <button>Qaz</button>
                        <button>Elektro</button>
                        <button>Hibrid</button>
                        <button>Plug-in-Hibrid</button>
                    </div>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Ötürücü</p>
                    <div class="btn-groups-btns">
                        <button>Vacib deyil</button>
                        <button>Arxa</button>
                        <button>Ön</button>
                        <button>Tam</button>
                    </div>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Sürətlər qutusu</p>
                    <div class="btn-groups-btns">
                        <button>Vacib deyil</button>
                        <button>Avtomat</button>
                        <button>Variator</button>
                        <button>Mexaniki</button>
                        <button>Robot</button>
                        <button>Reduktor</button>
                    </div>
                </div>
                <div class="bg-gray"></div>
                <div class="yerlerin-sayi btn-groups">
                    <p>Yerlərin sayı</p>
                    <ul>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><a href="">6</a></li>
                        <li><a href="">7</a></li>
                        <li><a href="">8+</a></li>

                    </ul>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Avtomobilin təhcizatı</p>
                    <div class="checkboxs">
                        <ul>
                            <li onclick="colorBtn(this)">Yüngül lehimli disklər</li>
                            <li onclick="colorBtn(this)">ABS</li>
                            <li onclick="colorBtn(this)">Lyuk</li>
                            <li onclick="colorBtn(this)">Yağış sensoru</li>
                            <li onclick="colorBtn(this)">Mərkəzi qapanma</li>
                            <li onclick="colorBtn(this)">Park radarı</li>
                            <li onclick="colorBtn(this)">Kondisioner</li>
                            <li onclick="colorBtn(this)">Oturacaqların isidilməsi</li>
                            <li onclick="colorBtn(this)">Dəri salon</li>
                            <li onclick="colorBtn(this)">Ksenon lampalar</li>
                            <li onclick="colorBtn(this)">Arxa götüntü kamerasi</li>
                            <li onclick="colorBtn(this)">Yan pərdələr</li>
                            <li onclick="colorBtn(this)">Oturacaqların ventilyasiyası</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Vəziyyəti</p>
                    <ul>
                        <li>Vuruğu yoxdur</li>
                        <li>Rənglənməyib</li>
                    </ul>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <h6>Qəzalı ehtiyat hissələr üçün</h6>
                    <p>Təmirə ehtyac var və ya ümumiyyətlə yararsız vəziyyətdədir.</p>
                </div>
                <div class="bg-gray"></div>
                <div class="btn-groups">
                    <p>Sahiblərinin sayı</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4 və daha çox</li>
                    </ul>
                </div>
                <div class="axtar-btn">
                    <button>Axtar</button>
                </div>
            </div>
            <div id="mark-none">
                <div class="mark-fixed">
                    <div class="filter-header mark-header">
                        <i class="fa-solid fa-chevron-left" onclick="changePage('home')"></i>
                        <h2>Markalar</h2>
                        <i class="fa-solid fa-chevron-right" style="opacity: 0;"></i>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i> <input type="text" oninput="searchMarks()" id="searchMark"
                            placeholder="Məsələn BMW" />
                    </div>
                    <div class="marks">
                        <p>Populyar</p>
                        <div class="mark" onclick="filterForBrand('mercedes')"><img src="img/mercedes.png" alt="" />
                            <p>Mercedes</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('lada')"><img src="img/lada.png" alt="" />
                            <p>Lada (Vaz)</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('hundai')"><img src="img/honda.png" alt="" />
                            <p>Hundai</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('kia')"><img src="img/kia.png" alt="" />
                            <p>Kia</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('toyota')"><img src="img/toyota.png" alt="" />
                            <p>Toyota</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('bmw')"><img src="img/bmw.png" alt="" />
                            <p>BMW</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('opel')"><img src="img/opel.png" alt="" />
                            <p>Opel</p>
                        </div>
                        <div class="mark" onclick="filterForBrand('ford')"><img src="img/Ford.png" alt="" />
                            <p>Ford</p>
                        </div>
                        <div id="markalar"></div>
                    </div>
                </div>
            </div>
            <div id="kabinet">
                <div class="icon-kabinet" onclick="changePage('home')"><i class="fa-solid fa-x"></i></div>
                <div id="kabinet-main">
                    <div id="kabinet-logo">
                        <img src="img/kabinetLogo.svg" alt="turbo az logo" />
                    </div>
                    <p>Öz elanlarınıza baxmağın, onları redaktə və bərpa etməyin rahat yolu</p>
                    <button>Telefon nömrəsi ilə giriş</button>
                    <a href="">Biznes hesabınıza giriş</a>
                </div>
                <div id="kabinet-footer">
                    <p>Saytda avtorizasiyadan keçməklə siz Turbo.az-ın <a href="">İstifadəçi razılaşmasını</a> və <a
                            href="">Qaydalarını</a> qəbul etdiyinizi təsdiqləmiş olursunuz.</p>
                </div>
            </div>
            <div id="daha-cox">
                <div class="bg-white">
                    <h6>Daha çox</h6>
                </div>
                <div class="bg-gray"></div>
                <div class="bg-white">
                    <a href="">Русский язык</a>
                </div>
                <div class="bg-gray">
                </div>
                <div class="bg-white">

                    <a href="">Yardım</a>
                </div>
                <div class="bg-gray">

                </div>
                <div class="bg-white">
                    <a href="">Moto</a>
                </div>
                <div class="bg-gray"></div>
                <div class="bg-white border">
                    <a href="">Bütün elanlar</a>
                </div>
                <div class="bg-white border">
                    <a href="">Salonlar</a>
                </div>
                <div class="bg-white border">
                    <a href="">Ehtiyat hissələri və aksesuarlar</a>
                </div>
                <div class="bg-white border"><a href="">İcarə</a></div>
                <div class="bg-white border"><a href="">Bizimlə əlaqə</a></div>
                <div class="bg-gray big-gray"></div>
            </div>
    </>
  )
}

export default Header
