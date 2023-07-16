# Topics covered in class 7:

Understanding Flex box with the help of CSS Flex and grid guide book.

What is a FlexBox? Why we need it, what are advantages and how we create it.

## Justify content utility classes:
- justify-start: All items are placed at the beginning of the container with no spaces.
- justify-end: All items are placed at the end of the container with no spaces.
- justify-center: All items are placed at the center with no spaces.
- justify-between: All items are spaced out as much as possible with first item at the beginning and last item at the end.
- justify-around: Space before the flex items and after the flex items are half as much as space between the items.
- justify-evenly: Space before, after and between the items are same.

- Working Demo: https://play.tailwindcss.com/yBgBSiY4Pa?size=968x720

- Example is: NavBar component.

## flex Wrap
- So by just using flex it will force the box to be in horizontal line and that is okay for desktop but when we go to phone screen it will give us responsivness issues becuz flex will force items to be in horizontal line and due to smaller screen size the will not be capabale to be in line and the will go out of the screen and half of content will be even visible.
- so flex wrap encounter this problem by shifting items to another horizontal line below making the responsive behaviour.

- Working Demo: https://play.tailwindcss.com/EJ9Bj217Ze?size=600x530

- Example is: Team component.

## Align items
- When we want an icon and text placed next to each other, than we will use use align items.
- items-stretch: All items are stretched to fill the container.
- items-center: All items are aligned to the center of the container.
- items-start: All items are aligned to the beginning of the container,
- tems-end: All items are aligned to the end of the container.
- items-baseline: All items are positioned such that the base aligns to the end of the container.

- Working Demo: https://play.tailwindcss.com/epBJLBpXkB?size=1100x530

- Example is: TeamMember component.

## Flex Direction
- To change diraction of flex we can use the follwing:

- flex-row: This is the default behaviour. All items are placed in a single row from left to right
- flex-col: All items are placed in a single column from top to bottom.
- flex-row-reverse: All items are placed in a single row from right to left.
- flex-col-reverse: All items are placed in a single column from bottom to top.

- Working Demo: https://play.tailwindcss.com/AyZfnrBTJd?size=500x600

- Example is: Review component.

## Flex Grow
- Whenever we want to take input from user we create an input tag which creates an input an feild where user can input but it has a fixed size so if we make a long input feild then on mobile screen half of it will not even show. 
- So to make this input feild responsive Flex grow can be used. 

- Working Demo: https://play.tailwindcss.com/b8LjLcXE2e?size=800x600.

- Example is: Subscribe component.