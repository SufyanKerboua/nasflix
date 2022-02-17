import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
    const externalUrl = `https://www.youtube.com/watch?v=ysz5S6PUM-U`;
    const internalUrl1 = `data/1.mp4`;
    const internalUrl2 = `data/tmp/output2.mkv`;
    const internalUrl3 = `data/3.avi`;
    return (
        <div>
            <ReactPlayer
                url={internalUrl2}
                controls
                // config={{
                //     file: {
                //         tracks: [{ kind: 'subtitles', srcLang: 'en' }],
                //         tracks: [{ kind: 'subtitles', srcLang: 'fr' }],
                //     },
                // }}
            />
            {/* <embed
                type="application/x-vlc-plugin"
                pluginspage="http://www.videolan.org"
                version="VideoLAN.VLCPlugin.2"
                width="640"
                height="480"
                target={externalUrl}
                id="vlc"
            ></embed> */}
            {/* 
            <embed
                type="application/x-vlc-plugin"
                pluginspage="http://www.videolan.org"
                version="VideoLAN.VLCPlugin.2"
                width="100%"
                height="100%"
                id="vlc"
                loop="yes"
                target={internalUrl2}
            ></embed>

            <embed
                id="divxplayer"
                type="video/divx"
                width="1024"
                height="768"
                src={internalUrl2}
                autoPlay={true}
                pluginspage="http://go.divx.com/plugin/download/"
            ></embed> */}
        </div>
    );
}

export default VideoPlayer;
