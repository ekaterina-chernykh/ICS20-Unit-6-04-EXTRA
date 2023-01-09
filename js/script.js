// Copyright (c) 2023 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-04-EXTRAA/sw.js", {
    scope: "/ICS20-Unit-6-04-EXTRAA/",
  })
}

/**
 * This function displays an alert.
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  const length = params.get("length")
  console.log(length)

  const area = length * length
  const dimensions = "<ul>\n<li>length=" + length + "</li>\n</ul>"

  document.getElementById("dimension").innerHTML = dimensions
  document.getElementById("area").innerHTML =
    "Area is: " + area.toFixed(2) + " units²"
}
