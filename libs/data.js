const data = [
  {
    title: 'Lesson 1: Introduction',
    section: [
      {
        heading: 'What are css animation',
        content:
          'CSS animations enable the gradual change of CSS properties over time, creating visual effects that enhance user interaction, They allow developers to animate HTML elements without needing JavaScript or external libraries Commonly animated properties include color, position, size, and opacity.'
      },
      {
        heading: 'Why use Css Animation',
        content: [
          'Make web interactions more engaging and intuitive.',
          'Add life and movement to static web pages.',
          'Guide users’ attention to important elements or actions.'
        ]
      },
      {
        heading: 'You will learn the following animation properties:',
        content: [
          '@keyframe',
          'animation-name',
          'animation-duration',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'animation-timing-function',
          'animation-fill-mode',
          'animation'
        ]
      }
    ]
  },
  {
    title: 'Lesson 2: @keyframes',
    section: [
      {
        heading: '@Keyframes',
        content:
          'In CSS, the @keyframes rule is used to define animations. It allows you to specify the stages of an animation with different styles at each stage.<span class="secondary-color"> These stages are marked with percentages or the keywords from and to, where from represents 0% (the start of the animation) and to represents 100% (the end of the animation).</span>'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframe jump{ 
            from {
              transform: translateY(0);
            };
            to{
              transform: translateY(50px);
            }
          }`,
          `@keyframe jump{ 
            0% {
              transform: translateY(0);
            };
            50%{
              transform: translateY(50px);
            }
            100%{
               transform: translateY(50px);
            }
          }
          `
        ]
      },
      {
        heading: 'Values',
        content: [
          {
            title: 'jump <Keyframe name>',
            description:
              'A name that identifies the keyframe, When defined in animation-name the name must be same'
          },
          {
            title: 'from',
            description: 'An starting offset, Always starts from 0%'
          },
          { title: 'end', description: 'An ending offset, ends at 100%' },
          {
            title: 'percentage <%>',
            description:
              'Instead of to (0%) and from (100%), We can also define custom percentage'
          }
        ]
      }
    ]
  },
  {
    title: 'Lesson 3 : animation-name',
    section: [
      {
        heading: 'animation-name',
        content:
          'The animation-name property in CSS is used to specify the name of the keyframes animation that should be applied to an element. This property is part of the CSS Animation module, which allows you to create animations that change element styles over time.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateX(0); }
             100% { transform: translateX(100px); }
  }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; /* Details in coming lesson */
             animation-timing-function: ease-in-out; /* Details in coming lesson */
             animation-iteration-count: infinite; /* Details in coming lesson */
  }

          `
        ]
      },
      {
        heading: 'Key points',
        content: [
          {
            title: 'Naming: ',
            description:
              'The name used in animation-name must match the name specified in the @keyframes rule.'
          },
          {
            title: 'Multiple Animation: ',
            description:
              'You can specify multiple animations by separating them with commas in animation-name, and similarly for animation-duration, animation-timing-function, and other animation properties.'
          },
          {
            title: 'Fallback: ',
            description:
              'If the @keyframes rule is missing or the name is incorrect, no animation will be applied.'
          }
        ]
      }
    ]
  }
]

export default data
