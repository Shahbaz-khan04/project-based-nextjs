# Topics covered in class 9:
### Practice Assignmnet Of FlexBox: Tweet Component
#### FlexBox Completed.

# Grid:
- While flexbox helps us arrange elements in one dimension (row or column), grid is a
method that helps us arrange and align elements in both the dimensions with rows and
columns. Similar to flexbox, we can control the the size, alignment, placement and order
of these elements using grid. Here again, we need at least two elements - a parent
element called grid container and at least one child element called grid item.
- grid: Setting the display property of an element to grid makes it a grid container

## Grid column
- The utilities grid-cols-* is used to specify how many columns you need and of what size each. Majority of the use cases for grid require creating equal width columns, and hence Tailwind provides these utility classes where you can create one to twelve columns of equal width.
- grid-cols-2: Creates two grid columns occupying 50% width each.
- but if we want diferent sized  columns than we can also specify that. In this case we will use grid-col like:
- grid-cols-[40%,60%] : Creates two grid columns occupying 40%  and 60% width each. 
- we can also give values of different units like [22rem,1fr] where fr is fraction and 1 fraction means all the remaining space whereas 2 fr means half the remaining space. fr unit is only used in grid.

- Example: Look at Example16b component.
- Another example with Images: Look at Example16d component.

### Gap:
- The gap-x-* and gap-y-* utilities set the size of the horizontal gap and vertical gap between columns and rows. Some of the common utilities for gap-x-* are here:
- gap-x-4 column-gap: 1rem; Gap between columns is 1rem
- gap-x-6 column-gap: 1.5rem; Gap between columns is 1.5rem
- gap-x-8 column-gap: 2rem; Gap between columns is 2rem
- Same classes for gap-y-*.

- Example: Look at Example18b component and its data in data/Ex18b.

### Object fit:
- These are utility classes for controlling how an image should be shown. Often when we include an image and set its heigth and width it stretches that image to fit in tat specifies h and w so to resize the image we can use the following classes:
- object-contain: Resize an element’s content to cover its container
- object-cover: Resize an element’s content to stay contained within its container
- object-fill: Stretch an element’s content to fit its container
- object-none: Display an element’s content at its original size ignoring the container
- object-scale-down: Display an element’s content at its original size but scale it down to fit its container if necessary

- Example: Look at Example18b component and its data in data/Ex18b.


