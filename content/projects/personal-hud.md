---
title: "Personal HUD"
thumbnail: "/images/projects/personal-hud-html-image1.png"
category: "homelab"
categoryLabel: "Home Lab"
status: "complete"
tags: ["MagicMirror²", "TrueNAS Scale", "Docker", "Onn 4K", "Full Kiosk Browser"]
blurb: "A wall-mounted personal HUD built with a salvaged 24-inch monitor, a $20 Onn 4K streaming box, and MagicMirror² running in Docker on TrueNAS Scale. Displays calendar, schedule, Tao Te Ching daily quotes, weather graphs, and live 3D printer web feeds."
weight: 3
date: 2026-10-01
---

## Background

A short little day project creating a personalized hud for myself so that I can at a glance when I wake up in the morning or am leaving the house see my calendar, daily schedule, weather, and get some motivation. 

I had done this in the past so I had a pretty good idea of the hardware and software that I was going to use, but this time I wanted something that was easier to maintain. Previously I used a raspberry pi 3a and the opensource [MagicMirror²](https://magicmirror.builders/) project to do this, but running the pi in desktop mode was a bit laggy and my auto launch implementation was a bit janky. 

This time I decided to stay with [MagicMirror²](https://magicmirror.builders/) for the software of the hud providing the calendar, schedule, weather, and motivation. 

## Hardware

I wanted to utilize what I already had laying around the house for this project.

For hardware I had recently found a 24 inch ips monitor on the side of the road, and luckily the only thing wrong with it was that it was missing a power supply. The next piece of hardware puzzle was the Onn 4k; a Walmart streaming box, I think I bought it for around $20 at the time. The last piece of hardware was my pre-existing server running TrueNAS Scale, a linux based NAS operating system. 

## Architecture & Deployment

Putting these pieces together we have MagicMirror² running on the server accessible by the Onn 4k via the servers local ip address at the specific MagicMirror² port using an app called [Full Kiosk Browser](https://www.fully-kiosk.com/#get-kiosk-apps) which allows you to access URLs in full screen. The Onn 4k is plugged into the monitor which is mounted on the wall in a convenient location. Currently I turn the monitor on in the morning and turn it off at night, but when I get around to it I can use software or a smart switch to automate this. 

For the MagicMirror² UI I was able to work off of my old implementation, and use Google's Antigravity to massage it into something more practical and clean. Then deployed it on TrueNAS using a docker compose file. Making changes as needed locally and syncing them to the server using a deployment script. 

## Dashboard Features

![magic mirror](/images/projects/personal-hud-html-image1.png "magic mirror")
![full kiosk browser launcher](/images/projects/personal-hud-html-image3.png "full kiosk browser launcher")
![neptune 4 max klipper web UI](/images/projects/personal-hud-html-image2.png "neptune 4 max klipper web UI")

It has my full month's calendar, rolling schedule, motivation quote, and hourly weather report graph with temperature, wind, and rain predictions. The quotes are always from the Tao Te Ching and change everyday. This is my favorite spiritual text and is a good way to center my thought life.

Since Full Kiosk Browser allows you to have multiple URLs I added the URLs of my 3d printers allowing me to switch to them when I want to keep an eye on a print. And since it is a streaming box I can also access my Emby instance from my server to watch a movie if I like. 

## Wrap Up

This was a fun experience and a great example of using what you already have laying around to make something that makes your life easier at no extra cost.
