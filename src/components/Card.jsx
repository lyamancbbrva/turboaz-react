import React from 'react'

function Card() {
  return (
    <>
       <div class="card">
                  <div class="card-img">
                          <img src="${item.images}" />
                  </div>
                  <i class="fa-regular fa-heart"  style="color:red; font-weight: bold"  onclick="sil(${item.id})"></i>
                  <div class="card-bottom">
                      <p class="price">${item.price} ${item.currency}</p>
                      <p>${item.brand}, ${item.model}</p>
                      <p>2023, ${item.engine}L, ${item.odometer} ${item.odometerUnit}</p>
                      <span>${item.city},bugün,${item.banType} 13:59</span>
                  </div>

              </div>
    </>
  )
}

export default Card
