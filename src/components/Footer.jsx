import React from 'react'

function Footer() {
  return (
    <>
       <footer>
        <div id="mobile-footer">
            <div id="sec1">
                <a href="">Qaydalar</a>
                <a href="">İstifadəçi razılaşması</a>
                <a href="">Reklam yerləşdirin</a>
            </div>
            <div id="sec2">
                <p>Dəstək xidməti</p>
                <p id="number">
                    (012) 505-77-55
                </p>
                <span>İş saatları — Həftə içi: 09:00-19:00 | Şənbə: 09:00-13:00</span>
                <div id="footer-icons">
                    <div class="icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div id="sec3">
                <a href="">Tam versiya</a>
                <a href="">Русский язык</a>
                <span>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət
                    daşımır.</span>
                <span>© 2006-2024 Digital Classifieds MMC. VÖEN: 1405631661</span>
            </div>
        </div>
        <div id="desktop-footer">
            <div class="ft-top container p20">
                <a href="">Reklam yerləşdirin</a>
                <div class="df">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <a><i class="fa-solid fa-envelope"></i> turbo@turbo.az</a>
                    <a><i class="fa-solid fa-phone"></i> (012) 505-77-55</a>
                </div>
            </div>
            <hr />
            <div class="footermarkalar container p20">
                <span id="footerlist"></span>
            </div>
            <hr />
            <div class="ft-bottom container p20">
                <a href="">Qaydalar</a>
                <a href="">Qanunlar</a>
                <a href="">İstifadəçi razılaşması</a>
                <a href="">Məxfilik siyasəti</a>
            </div>
            <div class="ft-end p20">
                <span class="container">
                    <p>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş <br /> elanların məzmununa görə
                        məsuliyyət daşımır.</p>
                    <p>2006-2024 Digital Classifieds MMC. VÖEN: 1405631661 <a href="">Mobil versiyasi</a></p>
                </span>
            </div>

        </div>
        </footer>
    </>
  )
}

export default Footer
