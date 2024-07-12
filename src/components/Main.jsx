import React from 'react'
import Card from './Card'

function Main() {
  return (
    <>
      <main>
        <div class="container">
            <h3 class="premium-elanlar">premium elanlar</h3>
            <div id="cards">
            </div>
        </div>
        <div id="menu">
            <div id="home">
                <i class="fa-solid fa-house" id="home-icon" onclick="changePage('home')"></i>
                <p>Əsas</p>
            </div>
            <div id="liked">
                <i class="fa-solid fa-heart" id="like-icon" onclick="changePage( 'like')"></i>
                <p>Seçilmişlər</p>
            </div>
            <div id="new">
                <img src="img/plus.svg" alt="yeni elan" />
                <p id="new-p">Yeni elan</p>
            </div>
            <div id="user">
                <i class="fa-solid fa-circle-user" id="user-icon" onclick="changePage( 'kabinet')"></i>
                <p>Kabinet</p>
            </div>
            <div id="bar">
                <i class="fa-solid fa-bars" id="more-icon" onclick="changePage( 'dahacox')"></i>
                <p>Daha çox</p>
            </div>
        </div>
    </main>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</>
  )
}

export default Main
