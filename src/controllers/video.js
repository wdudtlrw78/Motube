export const trending = (req, res) => {
  const videos = [
    {
      title: 'First Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Second Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Third Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
  ];

  return res.render('home', { pageTitle: 'Home', videos });
}; // render : (pug) html template engine rendering

export const see = (req, res) => {
  return res.render('watch');
};

export const edit = (req, res) => {
  return res.render('edit');
};
export const search = (req, res) => res.render('search');

export const upload = (req, res) => res.render('upload');

export const deleteVideo = (req, res) => {
  return res.render('Delete Video');
};
