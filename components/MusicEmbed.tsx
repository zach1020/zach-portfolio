import "./MusicEmbed.css"

const MusicEmbed = () => {
    return(
        <div>
            <div className="meHeader">
                MUSIC
            </div>
            <div>
                Check out my most recent album on SoundCloud!
            </div>
 <div className="w-full max-w-3xl mx-auto">
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2040631965&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="rounded-xl"
      ></iframe>

      <div className="text-xs text-neutral-400 mt-2 text-center">
        <a
          href="https://soundcloud.com/capybara-watanabe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Capybara Watanabe
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/capybara-watanabe/sets/someday-well-live-the-good"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Someday We'll Live The Good Life (Album Version)
        </a>
      </div>
    </div>        
    </div>
    )
}

export default MusicEmbed;