import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Box, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../colors/colors';

const videos = [
  { "id":'1',
    "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
    "subtitle" : "By Blender Foundation",
    "thumb" : "images/BigBuckBunny.jpg",
    "title" : "Big Buck Bunny"
  },
  {
    "id":'2', "description" : "The first Blender Open Movie from 2006",
    "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ],
    "subtitle" : "By Blender Foundation",
    "thumb" : "images/ElephantsDream.jpg",
    "title" : "Elephant Dream"
  },
  {"id":'3', "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
    "subtitle" : "By Google",
    "thumb" : "images/ForBiggerBlazes.jpg",
    "title" : "For Bigger Blazes"
  },
  {"id":'4', "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
    "subtitle" : "By Google",
    "thumb" : "images/ForBiggerEscapes.jpg",
    "title" : "For Bigger Escape"
  },
  { "id":'5',"description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
    "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ],
    "subtitle" : "By Google",
    "thumb" : "images/ForBiggerFun.jpg",
    "title" : "For Bigger Fun"
  },
];

const VideoPopup = ({ videoSrc, onClose, videoRef, onTimeUpdate }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
        cursor:'pointer'
      }}
    >
      <Box sx={{ position: 'relative', width: '80%', maxWidth: '800px', bgcolor: 'white', borderRadius: '8px' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'black', cursor: 'pointer', zIndex: 50 }}
        >
          <CloseIcon />
        </IconButton>
        <video width="100%" controls ref={videoRef} onTimeUpdate={onTimeUpdate}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export const UnCompletedSessions = ({ onStartSession, id }) => {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ direction: 'rtl', mb: 2 }}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: '#F2F2F2',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '50px',
            position: 'relative',
          }}
        >
          <Grid item xs={2} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ alignSelf: 'center', color: 'black' }}>الاختبار {id}</Typography>
          </Grid>
          <Grid
            item
            md={11}
            xs={8.5}
            sx={{
              width: '30%',
              padding: '5px',
              borderRadius: '50px',
              height: 15,
              position: 'absolute',
              left: '5px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                backgroundColor: colors.lightBlue,
                width: '100%',
                color: 'white',
                borderRadius: '50px',
                height: '35px',
              }}
              onClick={onStartSession}
            >
              دخول
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const CompletedSessions = ({ percentage, onStartSession, id }) => {
  return (
    <Grid onClick={onStartSession} container spacing={2} alignItems="center" sx={{ direction: 'rtl', mb: 2, cursor:'pointer' }}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: '#3C7098',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '50px',
            position: 'relative',
          }}
        >
          <Grid item xs={2} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', alignSelf: 'center', paddingRight: '5px' }}>الاختبار{id}</Typography>
          </Grid>
          <Grid
            item
            md={11}
            xs={8.5}
            sx={{
              width: `${percentage}%`,
              padding: '5px',
              borderRadius: '50px',
              height: 25,
              backgroundColor: '#f5f5f5',
              position: 'absolute',
              left: '5px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: colors.lightBlue, alignSelf: 'center', paddingRight: '5px' }}>
              {percentage === 100 ? `مكتمل ${percentage}%` : `${percentage}%`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const StudentSessions = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoProgress, setVideoProgress] = useState({}); 
  const videoRef = useRef(null);

  const handleStartSession = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setVideoVisible(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const percentage = Math.round((video.currentTime / video.duration) * 100);
      setVideoProgress((prev) => ({ ...prev, [currentVideo]: percentage }));
    }
  };

  const handleClosePopup = () => {
    if (videoRef.current) {
      const percentage = Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100);
      if (percentage < 100) {
        setVideoProgress((prev) => ({ ...prev, [currentVideo]: percentage }));
      }
    }
    setVideoVisible(false);
  };

  useEffect(() => {
    if (currentVideo && videoVisible && videoRef.current) {
      const video = videoRef.current;
      video.addEventListener('loadedmetadata', () => {
        const savedProgress = videoProgress[currentVideo] || 0;
        const duration = video.duration;
        const newTime = (savedProgress / 100) * duration;
        if (Number.isFinite(newTime) && newTime >= 0 && newTime <= duration) {
          video.currentTime = newTime;
        }
      });

      return () => {
        video.removeEventListener('loadedmetadata', () => {});
      };
    }
  }, [currentVideo, videoVisible, videoProgress]);
  

  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        bgcolor: 'white',
        borderRadius: '8px',
        boxShadow: 1,
        maxHeight: '300px',
        overflowY: 'auto',
      }}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {videoProgress[video.sources[0]] <= 100 ? (
            <CompletedSessions percentage={videoProgress[video.sources[0]]} onStartSession={() => handleStartSession(video.sources[0])} id={video.id}/>
          ) : (
            <UnCompletedSessions
              video={video}
              onStartSession={() => handleStartSession(video.sources[0])}
              id={video.id}
            />
          )}
        </Box>
      ))}
      {videoVisible && currentVideo && (
        <VideoPopup
          videoSrc={currentVideo}
          onClose={handleClosePopup}
          videoRef={videoRef}
          onTimeUpdate={handleTimeUpdate}
        />
      )}
    </Box>
  );
};

export default StudentSessions;
