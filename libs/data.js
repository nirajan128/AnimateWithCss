const data = [
  {
    title: 'Introduction to Animation',
    section: [
      {
        heading: 'What are css animation',
        content:
          'CSS animations enable the gradual change of CSS properties over time, creating visual effects that enhance user interaction, They allow developers to animate HTML elements without needing JavaScript or external libraries Commonly animated properties include color, position, size, and opacity.'
      },
      {
        heading: 'Why use Css Animation',
        content: `
          Make web interactions more engaging and intuitive<br>
          Add life and movement to static web pages<br>
          Guide users’ attention to important elements or actions<br>
          `
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
    title: '@keyframes',
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
    title: 'Animation-name',
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
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
  }`,
          `
          .animated-element {
             animation-name: move;
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
  },

  {
    title: 'Animation duration',
    section: [
      {
        heading: 'animation-duration',
        content:
          'The animation-duration property in CSS defines how long an animation should take to complete one cycle, from start to finish. It is a key property in the CSS Animation module, allowing you to control the timing of your animations.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             /* The animation will run for 2 sec*/
             /* You can also include ms as a value */
             
           }

    `
        ]
      },
      {
        heading: 'Key points',
        content: [
          {
            title: 'Single cycle',
            description:
              ' The animation-duration defines the time for one cycle of the animation. If the animation repeats, each cycle will take this amount of time.'
          },
          {
            title: 'Combining other properties',
            description:
              ' You can combine animation-duration with other animation properties like animation-delay, animation-timing-function, and animation-iteration-count to control when the animation starts, its pacing, and how many times it repeats.'
          },
          {
            title: 'Default value',
            description:
              ' If not specified, the default value of animation-duration is 0s, which means no animation will occur.'
          }
        ]
      }
    ]
  },

  {
    title: 'Animation-delay',
    section: [
      {
        heading: 'Animation-delay',
        content:
          'The animation-delay property in CSS is used to specify the amount of time to wait before the animation starts. This property allows you to delay the beginning of an animation, giving you control over when an animation sequence should begin after the page loads or an element becomes visible.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             animation-delay: 1s; /* Animation will start after 1 second delay */
             
           }

    `
        ]
      },
      {
        heading: 'Key points',
        content: [
          {
            title: 'Delay Time',
            description:
              'The value can be in seconds (s) or milliseconds (ms). For example, animation-delay: 2s; starts the animation after 2 seconds.'
          },
          {
            title: 'Negative Values',
            description:
              'A negative value will make the animation start immediately, but as if it has already been running for that length of time.'
          },
          {
            title: 'Combining delays',
            description:
              'You can use different delay times for different animations by separating them with commas.'
          }
        ]
      }
    ]
  },

  {
    title: 'Animation-iteration-count',
    section: [
      {
        heading: 'Animation-iteration-count',
        content:
          'The animation-iteration-count property in CSS specifies the number of times an animation should be played. This property allows you to repeat an animation a specific number of times or indefinitely.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             animation-delay: 1s;
             animation-iteration-count: 3; /* The animation will repeat 3 times */ 
             
           }

    `
        ]
      },
      {
        heading: 'Key points',
        content: [
          {
            title: 'Infinite Iteration',
            description:
              'Use infinite to make the animation repeat indefinitely.'
          },
          {
            title: 'Default values',
            description:
              'The default value is 1, meaning the animation will only run once unless otherwise specified.'
          },
          {
            title: 'Multiple animation',
            description:
              'You can set different iteration counts for multiple animations using commas.'
          }
        ]
      }
    ]
  },
  {
    title: 'Animation-direction',
    section: [
      {
        heading: 'Animation Direction',
        content:
          'The animation-direction property in CSS defines whether an animation should play forwards, backwards, or alternate between both. This property can be used to create complex animations by controlling the direction in which the animation cycles.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             animation-delay: 1s;
             animation-iteration-count: 3;
             animation-direction: alternate /* The animation will alternate directions */

             
           }

    `
        ]
      },
      {
        heading: 'Keypoints',
        content: [
          {
            title: 'Normal',
            description: `animation-direction: normal; (default) - The animation runs forward.`
          },
          {
            title: 'Reverse',
            description:
              'animation-direction: reverse; – The animation runs backward.'
          },
          {
            title: 'Alternate',
            description:
              'animation-direction: alternate; – The animation alternates between running forward and backward.'
          },
          {
            title: 'Alternate-reverse',
            description:
              'animation-direction: alternate-reverse; – The animation alternates backward first, then forward.'
          }
        ]
      }
    ]
  },
  {
    title: 'Animation-timing-function',
    section: [
      {
        heading: 'Animation-timing-function',
        content:
          'The animation-timing-function property in CSS specifies the speed curve of an animation. This property controls how the intermediate steps in an animation sequence are calculated, determining the pacing of the animation.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             animation-delay: 1s;
             animation-iteration-count: 3; 
             animation-timing-function: ease-in-out; /* The animation will have a smooth start and end */
             
           }

    `
        ]
      },
      {
        heading: 'Keypoints',
        content: [
          {
            title: 'Ease',
            description:
              'ease – Starts slow, speeds up, then slows down (default).'
          },
          {
            title: 'Linear',
            description:
              'linear – The animation has a constant speed from start to finish.'
          },
          {
            title: 'Ease-in',
            description: 'ease-in – The animation starts slow and speeds up.'
          },
          {
            title: 'Ease-out',
            description: 'ease-out – The animation starts fast and slows down.'
          },
          {
            title: 'Custom-timing',
            description:
              'You can define custom timing functions using cubic-bezier functions.'
          }
        ]
      }
    ]
  },
  {
    title: 'Animation-fill-mode',
    section: [
      {
        heading: 'Animation-fill-mode',
        content:
          'The animation-fill-mode property in CSS specifies how a CSS animation should apply styles to its target before and after it is executing. This property determines whether the animations effects should be visible before the animation starts or after it ends.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation-name: move;
             animation-duration: 2s; 
             animation-delay: 1s;
             animation-iteration-count: 3;
             animation-fill-mode: forwards; /* The element will retain the final width after the animation ends */
             
           }

    `
        ]
      },
      {
        heading: 'Keypoints',
        content: [
          {
            title: 'None',
            description:
              'animation-fill-mode: none; – The animation has no effect on the element before or after it runs.'
          },
          {
            title: 'Forward',
            description:
              'animation-fill-mode: forwards; – The element retains the final styles of the animation after it finishes.'
          },
          {
            title: 'Backward',
            description:
              'animation-fill-mode: backwards; – The element uses the starting styles of the animation before it begins.'
          },
          {
            title: 'Both',
            description:
              'animation-fill-mode: both; – The element retains both the starting and ending styles before and after the animation.'
          }
        ]
      }
    ]
  },
  {
    title: 'Animation',
    section: [
      {
        heading: 'Animation',
        content:
          'The `animation` shorthand property in CSS allows you to define multiple aspects of an animation in a single line. This property can include values for <span class="fw-bold"> <br>`animation-name` <br>`animation-duration` <br>`animation-timing-function` <br>`animation-delay` <br>`animation-iteration-count` <br>`animation-direction` <br>`animation-fill-mode` <br>`animation-play-state`</span>. Using the shorthand property helps keep your CSS code clean and concise.'
      },
      {
        heading: 'Syntax',
        content: [
          `@keyframes move {
              0% { transform: translateY(0); }
             100% { transform: translateY(100px); }
           }`,
          `
          .animated-element {
             animation: move 2s linear infinite
             
             /* The animation shorthand sets:
               - animation-name: move;
               - animation-duration: 2s;
               - animation-timing-function: linear;
               - animation-iteration-count: infinite;
            */

             
           }

    `
        ]
      },
      {
        heading: 'Keypoints',
        content: [
          {
            title: 'Order Matters',
            description:
              'When using the `animation` shorthand, the order of values is important. The correct order is: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.'
          },
          {
            title: 'Ommiting values',
            description:
              'If you omit a value in the shorthand, the property will use its default value. For example, if `animation-delay` is not specified, it defaults to `0s`'
          },
          {
            title: 'Multiple Animation',
            description:
              'You can define multiple animations in a single `animation` property by separating them with commas. Each animation sequence will run according to its specified properties.'
          },
          {
            title: 'Common usage',
            description:
              'The `animation` shorthand is commonly used to apply all necessary animation properties at once, simplifying the CSS code and ensuring consistent animation behavior.'
          }
        ]
      }
    ]
  }
]

export default data
