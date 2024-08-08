<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/medimy.css" />
  <link href="assets/css/webflow.css" rel="stylesheet" type="text/css">
  <title>MAGAJINC</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg">
    <a href="index.php"><img src="assets/images/Park neuroscience.png" class="navbar-brand" /></a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseMenu">
      <span> <i class="fas fa-bars"></i> </span>
    </button>
    <div class="collapse navbar-collapse" id="collapseMenu">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item pr-5">
          <a href="index.php" class="nav-link active">Home</a>
        </li>
        <li class="nav-item pr-5">
          <a href="about-us.php" class="nav-link">About</a>
        </li>
        <!-- <li class="nav-item pr-5">
        <a href="doctors.php" class="nav-link">Doctors</a>
      </li> -->
        <li class="nav-item pr-5 dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Doctors
          </a>
          <div class="dropdown-menu" aria-labelledby="resourcesDropdown">
            <a class="dropdown-item" href="doctors.php">Inhouse Specialists</a>
            <a class="dropdown-item" href="fellowship.php">Fellowships</a>

            <!-- Add more resource links as needed -->
          </div>
        </li>
        <li class="nav-item pr-5">
          <a href="our-specialities.php" class="nav-link">Our Specialities</a>
        </li>
        <!-- Resources Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resources
          </a>
          <div class="dropdown-menu" aria-labelledby="resourcesDropdown">
            <a class="dropdown-item" href="video.php">Videos</a>
            <a class="dropdown-item" href="docvideo.php">Doctors Videos</a>
            <a class="dropdown-item" href="testimonials.php">Testimonials</a>
            <a class="dropdown-item" href="blog.php">Blog</a>
            <a href="research.php" class="dropdown-item">Research</a>
            <!-- Add more resource links as needed -->
          </div>
        </li>
      </ul>
    </div>
  </nav>


</body>

</html>