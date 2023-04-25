<p align="center"> 
  <img src="images/dune.png" alt="Dune Project Logo" width="80px" height="80px">
</p>
<h1 align="center">Dune Project 🏜️</h1>

Dune Project is an automated way to generate and publish Dune Quote artwork on Redbubble with the recommended size and resolution. Create stunning images with quotes from the Dune movies, beautifully presented with captivating backgrounds and cool fonts.

## Features 🌟
- 📜 Generate Dune quotes with a single click
- 🎨 Customize fonts, colors, and positions
- 🌅 Use captivating images from Unsplash as backgrounds
- 🖼️ Save generated images in high resolution
- 🚀 Automated publishing on Redbubble _(coming soon)_

## How It Works 🛠️
1. The script sends a `GET` request to the [Dune API](https://github.com/ywalia01/dune-api) to retrieve a random quote from the Dune movies.
2. The quote is sent to the [Bruzu API](https://docs.bruzu.com/), an image generator that creates an image with the quote.
3. The generated image is saved in the root folder of the project, ready for use.

## Installation 📥
```bash
# Install dependencies
npm install

# Import Tailwind
npm tailwind:css

# Start the project
npm start
```

**IMPORTANT**: Create a `.env` file in the root directory and use `.env.example` as a reference. Make sure to add your Bruzu API key:

```
API_KEY_BRUZU=YOUR-BRUZU-API-KEY
```

## Usage 🖥️
Go to `localhost:3000/quote` to generate a quote with a beautiful background and cool font 😎.

You can customize the Bruzu URL in the `routes/quote.js` file to change fonts, colors, positions, and more. Refer to the Bruzu [Documentation](https://docs.bruzu.com/) for additional customization options.

```js
axios.get(encodeURI('https://img.bruzu.com/?apiKey='+process.env.API_KEY_BRUZU+'&backgroundImage=https://source.unsplash.com/zuueig1w8WI/7632x6480&h=6480&w=7632&a.text=' + quote + '&a.color=white&a.fontFamily=Poppins&a.fontWeight=800&a.width=7632&a.fs=375&a.ta=center'), {responseType: "stream"} )  
        .then(response => {  
            // Saving file to working directory  
            response.data.pipe(fs.createWriteStream("output.png"));  
        })  
            .catch(error => {  
            console.log(error);  
        }); 
```

➡️ Output file at root: `output.png`

## Example 📸
<p align="center"> 
  <img src="images/output.png" alt="Dune Project Example" width="500px">
</p>

## Upcoming Features 📝
- Add the auto-publishing feature on Redbubble
- Add the possibility to enter a custom Unsplash URL for the background image

## Author ✍️
Aktilor - 2021

Embark on a creative journey with Dune Project and share your love for the Dune universe with the world! 🌌🪐
