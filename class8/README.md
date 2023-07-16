# Topics covered in class 8 and 9:

# FlexBox:
## Flex Shrink:
- The default behaviour of flex items is to shrink to fit in a single row or a single column of
the container (unless using flex-wrap). Hence each item shrinks proportionate to its initial size.
- So if we want to prevent shrinking of an item than we use flex-shrink-0 in that item to make it keep its original size.

- You can better understand by looking at this example: 
https://play.tailwindcss.com/d9XiAMGTCd?size=700x500

- Example is the MyProfile component.

## Flex Basis:
- This makes uniform spacing b/w items in the container and this spacing will be responsive to any screensize Its value can be in numbers like h and w and also in percentages so 1/2 = 50% 1/3 = 33.33% and so on.

- You can better understand by looking at this example: But change basis-0 flex-grow flex-shrink to basis-1/3 first and also delete container from parent div and also delete the whole frand parent div. 
https://play.tailwindcss.com/zVmsWLf8cf?size=800x500

- Example is the Pricing component.

### gap property
- gap property creates uniform gaping b/w elements. Note that it doesnot apply gapping around the elements meaning not in start and last of elements.

- Example is Pricing Component.

## Flex shorthand property
- This property is used to quickly set three of the flex properties(flex grow,shrink and basis) together with single class.
- flex-1: Flex item grows and shrinks and the initial size is ignored. If this is used on multiple items, all the items take up equal space.
- flex-auto: Flex item grows and shrinks but the initial size considered. If this is used on multiple items, all the items take up space based on the width value each item is given.
- flex-initial: This is the default. The item shrinks when space is less but does not grow when there's space available. Initial size is auto-calculated.
- flex-none: The item does not grow, nor shrink.

- Example is FlexShortProperty Component.

- You can better understand by looking at this example: https://tailwindcss.com/docs/flex 
look at the examples of each below the property table.

## Auto Margins
- The margin utilities with auto value can be used to extend margins of items in a flex to occupy the extra space. So, in the below example, the ml-auto occupies all the extra space on the left,pushing the element to the right.

- Example is Footer Component.

- You can better understand by looking at this example: https://tailwindcss.com/docs/flex 
remove ml-auto to see what it does. 

## Changing Flex behaviour in different screensizes:
- We can change the behaviour of Flex for different screensizes to in creases responsivness.
- As we know tailwind is follows 'mobile first' approach so in tailwind you design app according to mobile screensize and for other screen sizes you change behaviour of Flex.
- So normally the class that you give to element will be applied on mobile screen but if you donot specify other screensizes it will be applied on every other screensize.
- md: is for medium screensize like: laptops or tablets and lg: is for large screensize like:desktops, TVs.

# FlexBox(Skipped Topics):
## Order
## Align Self
## Align Content
## Inline Flex

