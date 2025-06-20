## 3D Art Gallery Tutorial using Three.js

I made this live coding tutorial about "how to create an interactive 3D Art Gallery using Three.js". This project is perfect for artists or designers to exhibit their artwork portfolios or projects. The full tutorial is almost 8 hours long, and is divided into parts. Please consider subscribing to my YouTube channel if you are interested.

## HELP!
First of all, use GitHub commits to mark our progress, so you can easily follow along and see the project evolve. So, to use the initial exact Three.js module I am using, go to "Commits" section of the GitHub repository and scroll down to the first commits, and download that version of the code, then step by step review and compare the other versions of the code. 
If you don't know how to do that, follow these instructions:

Go to my repository, click "commits", you will see all the commits list. Then scroll down to the first commit. On the right side of each commit name, you will see three small icons:
- a code number --> which if you hover on it says "view commit details". 
- a two square icon --> which if you hover says "view full SHA" 
- '< >' this icon --> which if you hover on says "browse repository at this point". 

Click this last icon I mentioned, '< >'. You will be redirected to the exact point in time of this project. You can then download the repository as you normally do with the green button "Code". 

## UPDATE!

Dear followers and enthusiasts,

I've been made aware of an issue many of you faced regarding the floor and ceiling textures appearing black. After a thorough investigation, I've identified the root of the problem. The high-resolution 4K textures we recently introduced are relatively large files. To manage such large files, GitHub uses a system called Large File Storage (LFS). However, there's a storage quota associated with LFS, and it seems we've reached that limit. This led to the textures not being stored correctly, resulting in broken image links in the downloaded projects.


##Folder Structre

```bash


├── .gitattributes
├── .gitignore
├── README.md
├── index.html
├── main.js
├── package.json
├── package-lock.json
├── style.css
├── vite.config.js
├── license.txt
│
├── modules/
│   ├── audioGuide.js
│   ├── boundingBox.js
│   ├── ceiling.js
│   ├── ceilingLamp.js
│   ├── clickHandling.js
│   ├── eventListeners.js
│   ├── floor.js
│   ├── galleryModels.js
│   ├── lighting.js
│   ├── menu.js
│   ├── movement.js
│   ├── paintingData.js
│   ├── paintingInfo.js
│   ├── paintings.js
│   ├── rendering.js
│   ├── scene.js
│   ├── sceneHelpers.js
│   ├── statue.js
│   ├── VRSupport.js
│   └── walls.js
│
├── public/
│   ├── artworks/
│   │
│   ├── img/
│   │   └── leather_white_4k.gltf
│   │
│   ├── models/
│   │   ├── bench/
│   │   ├── bench_2/
│   │   ├── ceiling-lamp/
│   │   ├── statue/
│   │   ├── chateau_lion_gltf/
│   │   ├── girl_with_doves_gltf/
│   │   └── nefertiti-bust/
│   │       ├── license.txt
│   │       ├── scene.bin
│   │       └── scene.gltf
│   │
│   ├── OfficeCeiling005_4K-JPG/
│   ├── sounds/
│   └── WoodFloor040_4K-JPG/
│



## Installation

You need Node.js installed on your computer.
And VSCode as an Editor.
Download link:

- https://nodejs.org
- https://code.visualstudio.com/Download

After cloning, or downloading the zip file, on GitHub (green button `<> Code`) open your terminal, and run:

```bash
  npm install
```

to install all the dependencies.
"node_modules" folder will appear at the left in the Explorer files in VsCode.

Then run:

```bash
  npx vite
```

to run the local server.
You'll see the URL address and the info help. Like for example:

```bash
  VITE v4.3.1  ready in 1759 ms

  ➜  Local:   http://123.4.5.6:7890/
  ➜  Network: use --host to expose  ➜  press h to show help
```

<img width="1717" alt="Screenshot 2024-03-23 at 23 03 41" src="https://github.com/theringsofsaturn/3D-art-gallery/assets/60050952/8e7e4ae5-9b7a-4baa-849c-7f9c8eb349c8">

<img width="1717" alt="Screenshot 2024-03-23 at 23 01 41" src="https://github.com/theringsofsaturn/3D-art-gallery/assets/60050952/f37cf94d-cafc-42a3-9ab6-def46caa15fa">

<img width="1722" alt="Screenshot 2024-03-23 at 20 16 09" src="https://github.com/theringsofsaturn/3D-art-gallery/assets/60050952/04073dc7-56ae-468f-abee-2053e3c6f965">


<img width="1722" alt="Screenshot 2024-03-22 at 18 51 31" src="https://github.com/theringsofsaturn/3D-art-gallery/assets/60050952/fa5a0ec3-5879-4a01-bd67-f5abaefad6bf">




## YouTube Video

[Click here!](https://youtu.be/vfMizAmPprs)

## Authors

- [Emilian Kasemi](https://www.github.com/theringsofsaturn)
