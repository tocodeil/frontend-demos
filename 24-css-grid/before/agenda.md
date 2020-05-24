# CSS Grid

1. Hello Grid

2. Grid Attributes

.grid {
        display: grid;
        grid-template-areas: "h1   h1  h1 h1"
                             "nav  h2  h2 h2" 
                             "nav  txt txt bq";

        grid-template-columns: repeat(4, 1fr);
}

.grid-item {
        grid-area: txt;
}
      
3. Grid vs. Flexbox
