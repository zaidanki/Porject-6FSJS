I have changed the CSS a bit, made imgs on
first page go round when hovered,
made images pop up on the project page
made links pop up on project and about page
(github/demo)
made all error requirements for exceeds.

css changes/adding

.portfolio-index .thumbnail:hover{
  animation-fill-mode: forwards;
}

@keyframes mymove{
  from {border-radius: 0;}
  to {border-radius: 50%;}
}

.image:hover{
  transform: scale(1.05)
}

a:hover{
  color: #111;
  transform: scale(1.1)
}