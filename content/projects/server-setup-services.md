---
title: "Home Server Setup & Services"
category: "homelab"
categoryLabel: "Home Lab"
status: "ongoing"
tags: ["TrueNAS Scale", "Jellyfin", "Ollama", "Tailscale", "Immich"]
blurb: "TrueNAS Scale on the NAS running Jellyfin, Immich, Ollama with Open WebUI, and qBittorrent behind a Mullvad WireGuard tunnel. After a cross-country move to UCSC, got the server back online by sharing a laptop's WiFi through ethernet using Linux network sharing and Tailscale."
weight: 2
---

About my server setup: it is a laptop with a couple of harddrives plugged into the usb port it’s good enough but is running out of storage, I need to add a drive or two, but the usb drive thingy that I have can only hold two drives. I am thinking about maybe a m.2 to sata thing idk I need to figure out how to add more drive and how to make the unit more unified because as it stands its just a laptop plugged into drives. I would be nice to have the whole thing in a case or something (3d printing??).

Current setup:

![](/images/projects/server-setup-services-html-image2.png)![](/images/projects/server-setup-services-html-image4.png)![](/images/projects/server-setup-services-html-image3.png)

Maybe usb3 to gb ethernet adapter if necessary check specs of ethernet port but I doubt that it is gb

Harddrive from server part deals on ebay? (harddrive options):

[https://www.ebay.com/str/ServerPartDeals](https://www.google.com/url?q=https://www.ebay.com/str/ServerPartDeals&sa=D&source=editors&ust=1788550371928251&usg=AOvVaw02gGCV-A1taL3mxT8zF84h)

[https://a.co/d/dWIB5Ud](https://www.google.com/url?q=https://a.co/d/dWIB5Ud&sa=D&source=editors&ust=1788550371928504&usg=AOvVaw2R0UNgPrJmgQ3Xl6Oz9EHm)

What is in the system now:

[https://a.co/d/7RFR8He](https://www.google.com/url?q=https://a.co/d/7RFR8He&sa=D&source=editors&ust=1788550371928749&usg=AOvVaw3SYKcvkBUI-1fuxrWGs5Je)

M.2 to sata adapter + power supply for more drives: (check compatibility with setup aka zfs raid and truenas scale and this specific m.2 port)

[https://www.amazon.com/s?k=m.2+to+sata&i=electronics&crid=3NELBZ0CLTHUJ&sprefix=m.2+to+sata%2Celectronics%2C167](https://www.google.com/url?q=https://www.amazon.com/s?k%3Dm.2%2Bto%2Bsata%26i%3Delectronics%26crid%3D3NELBZ0CLTHUJ%26sprefix%3Dm.2%2Bto%2Bsata%252Celectronics%252C167&sa=D&source=editors&ust=1788550371929194&usg=AOvVaw2vpha0odRXggGLPgZU3iTs)

[https://www.newegg.com/p/pl?d=m.2+to+sata+adapter](https://www.google.com/url?q=https://www.newegg.com/p/pl?d%3Dm.2%2Bto%2Bsata%2Badapter&sa=D&source=editors&ust=1788550371929394&usg=AOvVaw0VOaKhCZ0Upje5SR0Xkyg7)

Then I will have to put the os onto a sata ssd. Need to figure out how to back up truenas scale.

[https://www.truenas.com/community/threads/how-to-clone-current-boot-drive-truenas-scale-os-to-new-ssd.114345/](https://www.google.com/url?q=https://www.truenas.com/community/threads/how-to-clone-current-boot-drive-truenas-scale-os-to-new-ssd.114345/&sa=D&source=editors&ust=1788550371929815&usg=AOvVaw33dACeXTxPkJIjGJsaOYHa)

Maxim required space for the truenas scale os is 16gb according to the docs.

[https://www.truenas.com/docs/scale/gettingstarted/scalehardwareguide/](https://www.google.com/url?q=https://www.truenas.com/docs/scale/gettingstarted/scalehardwareguide/&sa=D&source=editors&ust=1788550371930263&usg=AOvVaw2BceRyCoHKOFW1poO99B_7)

Therefore I only need a low capacity ssd for each system which will reduce the price

Cheapest one on amazon i found quickly

[https://a.co/d/9RXETYB](https://www.google.com/url?q=https://a.co/d/9RXETYB&sa=D&source=editors&ust=1788550371930673&usg=AOvVaw1kSNbva4-7gmr9XA4H78DY)

![](/images/projects/server-setup-services-html-image1.png)

I ended up buying this computer on OfferUp with the intention of pulling all of the components out and jerryrigging a way to put my laptop mother board into it along with all of the hard drives. But after thinking about it a bit more I think that I am just going to use this whole computer as the NAS and use the laptop for something else idk yet. I got the computer for $40 plus an hour and a half of driving.

Components:   
4th gen i7

4x4gb ddr3

Some gpu idk what 1060 6gb

1250watt psu

The main reason I wanted this computer was the case and the power supply. The case has tons of 3.5’ hard drive bays which is perfect for a NAS, and the power supply is 1250watt which I am going to swap with the 600watt that is in my personal rig which will be perfect for when I upgrade the GPU in that system.

I would still like to do the four hard drives hooked up to the laptop but it would just be for fun / proof of concept since I have not seen others make a NAS out of a laptop using an NVMe M.2 to SATA adapter before.

For running deepseek

[https://www.youtube.com/watch?time_continue=1&v=b2HeHDUbkec&embeds_referring_euri=https%3A%2F%2Fapps.truenas.com%2F&source_ve_path=Mjg2NjY](https://www.google.com/url?q=https://www.youtube.com/watch?time_continue%3D1%26v%3Db2HeHDUbkec%26embeds_referring_euri%3Dhttps%253A%252F%252Fapps.truenas.com%252F%26source_ve_path%3DMjg2NjY&sa=D&source=editors&ust=1788550371932503&usg=AOvVaw2sg7sDqPBa0WJIW01QRp-a)

Obviously need to do more research into running llms with truenas scale as the OS, might have to learn some docker maybe..

I put the 3080 and most of the hard drives into the 4th gen i7 system after removing the power supply and cleaning a bit and replugging everything from the power supply back in, and guess what? Everything lit up for a moment, then the power supply fucking exploded. I mean it didn’t literally explode, but it made a sparking noise and release a cloud of smoke, and this wasn’t like a little puff of white smoke, I mean my living room where I was building the computer was straight pillowed in a smoke that smelt like over cooked corn for some reason. After removing the power supply and examining the other components they ‘seem’ fine but I will only be able to know for sure when the new power supply comes in the main tomorrow. Hopely the 3080 isn’t fried. That would be so unfortunate lol.

Ok i hooked up everything with the new power supply and all the components seem to be working. I was only able to get into hte bios so idk if the gpu is working but judging from the leds and fans it seems fine. Now it is time to install truenas scale onto it and figure out the best way to transfer everything.

I would like to move away from all of the xvolumes that I currently have set up on the nas as I think that the longer they persist the larger of a headache I will have to deal with later when I have to get rid of them.

For the future when you need more drives

Search 5.25" harddrive bay

[https://www.reddit.com/r/truenas/comments/1mmtagm/35_hdd_bays_please_help/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button](https://www.google.com/url?q=https://www.reddit.com/r/truenas/comments/1mmtagm/35_hdd_bays_please_help/?utm_source%3Dshare%26utm_medium%3Dweb3x%26utm_name%3Dweb3xcss%26utm_term%3D1%26utm_content%3Dshare_button&sa=D&source=editors&ust=1788550371934786&usg=AOvVaw2zxnavWrywBQILTaHlJ8VC)

Got everything transferred over and working, but jellyfin would not start. Something to do with the gpu because when I disabled it in the jellyfin config it was able to start.

See this for fixing jellyfin with gpu [https://forums.truenas.com/t/nvidia-gpu-not-found-prevents-jellyfin-container-from-opening/32580/2](https://www.google.com/url?q=https://forums.truenas.com/t/nvidia-gpu-not-found-prevents-jellyfin-container-from-opening/32580/2&sa=D&source=editors&ust=1788550371935325&usg=AOvVaw1LagJl0C2tfkmSe_JF2DBM)

Also for some reason I am unable to update immich and jellyfin I get an `can not update while running` error but the application is stopped, weird…

Maybe this will help?

[https://forums.truenas.com/t/24-10-1-cant-upgrade-apps/28340/3](https://www.google.com/url?q=https://forums.truenas.com/t/24-10-1-cant-upgrade-apps/28340/3&sa=D&source=editors&ust=1788550371935885&usg=AOvVaw2J23vZQp0PwK3KGcmkrEMf)

Setting up ollama and open web ui for llm stuff is pretty cool. The gpu has 10gb of vram use this command to monitor it `nvidia-smi` maybe find a better way to do this in the future.

Setting up mullvad on the nas using this tutorial. Will have to go in after the 9th of august to refresh all the keys in /etc/wireguard/wg0.conf

[https://forums.truenas.com/t/guide-qbittorrent-app-with-wireguard-vpn/6003](https://www.google.com/url?q=https://forums.truenas.com/t/guide-qbittorrent-app-with-wireguard-vpn/6003&sa=D&source=editors&ust=1788550371936493&usg=AOvVaw0jBKHqRavK_3-x2Na6yfOA)

September 15, 2025

So I moved to ucsc and I was worried about if I would be able to get the server working here, and the good news is that I did and also the network sharing that allows me to access my printer as well. I was going to use Windows ICS which allows you to share a wifi internet connection through the ethernet port along with a switch to get the server on wifi then use tailscale to access the nas from my wireless devices. This would have worked as a concept but my windows install is being very unstable right now, so instead I did it with the tried and true, linux. I followed this tutorial for gnome but did it on kde because it is basically the same process.

[https://askubuntu.com/questions/359856/share-wireless-internet-connection-through-ethernet](https://www.google.com/url?q=https://askubuntu.com/questions/359856/share-wireless-internet-connection-through-ethernet&sa=D&source=editors&ust=1788550371937518&usg=AOvVaw1crZuJd2bl40FeMQECo12h)

Then all I had to do was change the shared ip range of tailscale in the truenas app configuration and now it basically functions like it did at home as long as I am connected to tailscale.

Other than that I haven't tested bittorrent yet, so I will see if that works eventually.  

September 16, 2025

I think that I can do this same thing with a raspi then I won’t always have to have dbox on when box is one, ya know..

March 11th, 2026

Immich migration.

[https://www.reddit.com/r/immich/comments/1izrmv3/how_to_migrate_immich_from_ixapps_to_datasets/](https://www.google.com/url?q=https://www.reddit.com/r/immich/comments/1izrmv3/how_to_migrate_immich_from_ixapps_to_datasets/&sa=D&source=editors&ust=1788550371938611&usg=AOvVaw0OKiOy3BdwCnThsBhm2Fry)

Look for a migration script.
