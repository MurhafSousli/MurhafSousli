export interface FlickityOptions{

  accessibility: boolean;
  // enable keyboard navigation, pressing left & right keys

  adaptiveHeight: boolean;
  // set carousel height to the selected slide

  autoPlay: boolean;
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second

  cellAlign: string;
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

  cellSelector: any,
  // specify selector for cell elements

  contain: boolean;
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled

  draggable: boolean;
  // enables dragging & flicking

  dragThreshold: number;
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices

  freeScroll: boolean;
  // enables content to be freely scrolled and flicked
  // without aligning cells

  friction: number;
  // smaller number = easier to flick farther

  groupCells: boolean;
  // group cells together in slides

  initialIndex: number;
  // zero-based index of the initial selected cell

  lazyLoad: boolean;
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells

  percentPosition: boolean;
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images

  prevNextButtons: boolean;
  // creates and enables buttons to click to previous & next cells

  pageDots: boolean;
  // create and enable page dots

  resize: boolean;
  // listens to window resize events to adjust size & positions

  rightToLeft: boolean;
  // enables right-to-left layout

  setGallerySize: boolean;
  // sets the height of gallery
  // disable if gallery already has height set with CSS

  watchCSS: boolean;
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }

  wrapAround: boolean;
// at end of cells, wraps-around to first for infinite scrolling

}
