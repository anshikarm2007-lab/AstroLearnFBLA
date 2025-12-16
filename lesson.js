// Lesson Data by Subject and Grade Level
const lessonData = {
    math: {
        6: [
            { 
                id: 'math_6_1', 
                title: 'Introduction to Fractions', 
                content: 'Fractions are a fundamental concept in mathematics that represent parts of a whole. A fraction consists of two numbers: the numerator (top number) and the denominator (bottom number). The numerator tells us how many parts we have, while the denominator tells us how many equal parts the whole is divided into. For example, in the fraction 3/4, 3 is the numerator and 4 is the denominator, meaning we have 3 out of 4 equal parts. Fractions can represent values less than 1 (proper fractions), equal to 1 (when numerator equals denominator), or greater than 1 (improper fractions). Understanding fractions is essential for working with measurements, ratios, and percentages in everyday life. Visual models like pie charts and number lines help us understand how fractions relate to whole numbers and each other.', 
                examples: ['1/2 represents one half of a whole', '3/4 means three out of four equal parts', '2/3 is greater than 1/2 but less than 1', '5/5 equals 1 whole', 'Fractions can be simplified: 4/8 = 1/2'], 
                grade: 6 
            },
            { 
                id: 'math_6_2', 
                title: 'Adding and Subtracting Fractions', 
                content: 'Adding and subtracting fractions requires understanding common denominators. When fractions have the same denominator, we simply add or subtract the numerators and keep the denominator the same. For example, 1/4 + 2/4 = 3/4. However, when fractions have different denominators, we must first find a common denominator. The least common denominator (LCD) is the smallest number that both denominators divide into evenly. To add 1/2 + 1/3, we find that 6 is the LCD (both 2 and 3 divide into 6). We convert 1/2 to 3/6 and 1/3 to 2/6, then add: 3/6 + 2/6 = 5/6. The same process applies to subtraction. After adding or subtracting, always simplify the result to its lowest terms by dividing both numerator and denominator by their greatest common factor.', 
                examples: ['1/2 + 1/4 = 2/4 + 1/4 = 3/4', '5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2', '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2', '3/4 - 1/2 = 3/4 - 2/4 = 1/4', 'Always simplify your final answer'], 
                grade: 6 
            },
            { 
                id: 'math_6_3', 
                title: 'Introduction to Decimals', 
                content: 'Decimals are another way to represent parts of a whole, using a base-10 system. The decimal point separates the whole number part from the fractional part. Each place to the right of the decimal point represents a power of 10: tenths (0.1), hundredths (0.01), thousandths (0.001), and so on. For example, in 3.14, the 3 is in the ones place, 1 is in the tenths place, and 4 is in the hundredths place. Decimals and fractions are closely related: 0.5 = 1/2, 0.25 = 1/4, and 0.75 = 3/4. When reading decimals, we say "and" for the decimal point: 3.14 is read as "three and fourteen hundredths." Understanding decimals is crucial for working with money, measurements, and scientific calculations. We can convert between fractions and decimals, and perform all arithmetic operations with decimals just like with whole numbers.', 
                examples: ['0.5 is the same as 1/2', '3.14 has two decimal places (tenths and hundredths)', '0.25 = 1/4 and 0.75 = 3/4', '1.5 means one and five tenths', 'Decimals can be added: 2.3 + 1.7 = 4.0'], 
                grade: 6 
            },
            { 
                id: 'math_6_4', 
                title: 'Basic Geometry: Shapes', 
                content: 'Geometry is the branch of mathematics that studies shapes, sizes, and properties of figures. Basic two-dimensional shapes include triangles (3 sides), quadrilaterals (4 sides), pentagons (5 sides), hexagons (6 sides), and circles. Triangles can be classified by their sides (equilateral, isosceles, scalene) or angles (acute, right, obtuse). Quadrilaterals include squares (4 equal sides, 4 right angles), rectangles (4 right angles, opposite sides equal), parallelograms (opposite sides parallel), and trapezoids (one pair of parallel sides). Circles are defined by their center and radius. Three-dimensional shapes include cubes, rectangular prisms, cylinders, spheres, and pyramids. Understanding these shapes helps us describe and measure the world around us. Each shape has unique properties: angles, sides, faces, edges, and vertices that we can identify and measure.', 
                examples: ['A square has 4 equal sides and 4 right angles', 'A triangle has 3 sides and 3 angles that sum to 180°', 'A circle has no sides but has a center and radius', 'A rectangle has 4 right angles with opposite sides equal', 'A cube has 6 square faces, 12 edges, and 8 vertices'], 
                grade: 6 
            },
            { 
                id: 'math_6_5', 
                title: 'Area and Perimeter', 
                content: 'Area and perimeter are fundamental measurements in geometry. Perimeter is the distance around the outside of a shape, measured in linear units (like inches, feet, or meters). For rectangles and squares, we add all four sides. Since opposite sides are equal, we can use the formula: Perimeter = 2 × (length + width). For a square with side length s, the perimeter is simply 4s. Area measures the space inside a shape, measured in square units (like square inches, square feet, or square meters). The area of a rectangle is found by multiplying length × width. For a square, since length equals width, area = side × side or side². The area of a triangle is (1/2) × base × height. Understanding these concepts is essential for real-world applications like measuring rooms, calculating material needed for projects, and solving problems involving space and distance.', 
                examples: ['Area of rectangle = length × width', 'Perimeter of rectangle = 2 × (length + width)', 'Area of square = side × side', 'Perimeter of square = 4 × side', 'Area of triangle = (1/2) × base × height'], 
                grade: 6 
            },
            { 
                id: 'math_6_6', 
                title: 'Introduction to Ratios', 
                content: 'A ratio is a comparison of two quantities, showing how many times one value contains or is contained within the other. Ratios can be written in three ways: using the word "to" (2 to 3), as a fraction (2/3), or with a colon (2:3). Ratios help us understand relationships between quantities. For example, if a class has 12 girls and 8 boys, the ratio of girls to boys is 12:8, which simplifies to 3:2. This means for every 3 girls, there are 2 boys. Ratios can be part-to-part (comparing two parts) or part-to-whole (comparing a part to the total). Equivalent ratios represent the same relationship: 2:3, 4:6, and 6:9 are all equivalent. Ratios are used extensively in cooking (recipe proportions), maps (scale), and everyday comparisons. Understanding ratios is foundational for learning about proportions, percentages, and rates.', 
                examples: ['2:3 means 2 to 3 or 2 out of every 5 total', 'If there are 4 boys and 6 girls, the ratio is 4:6 = 2:3', 'A ratio of 1:4 means 1 part to 4 parts', 'Ratios can be simplified like fractions', '3:6 simplifies to 1:2'], 
                grade: 6 
            }
        ],
        9: [
            { 
                id: 'math_9_1', 
                title: 'Algebra Basics: Variables', 
                content: 'Algebra introduces the concept of variables, which are symbols (usually letters like x, y, or z) that represent unknown values or values that can change. Variables allow us to write general rules and solve problems where we don\'t know all the numbers. An algebraic expression combines variables, numbers, and operations. For example, 3x + 5 is an expression where x is a variable. When we know the value of x, we can evaluate the expression by substituting that value. If x = 2, then 3x + 5 = 3(2) + 5 = 11. Equations are mathematical statements showing that two expressions are equal, like x + 5 = 10. Solving equations means finding the value of the variable that makes the equation true. We use inverse operations: addition undoes subtraction, multiplication undoes division. Understanding variables is the foundation of algebra and enables us to model real-world situations mathematically.', 
                examples: ['x + 5 = 10, solve for x: x = 5', '2y - 3 = 7, find y: y = 5', '3a + 2 = 11, so a = 3', 'Variables can represent any number', 'Expressions like 2x + 3 can be evaluated for different x values'], 
                grade: 9 
            },
            { 
                id: 'math_9_2', 
                title: 'Linear Equations', 
                content: 'Linear equations are equations where the highest power of the variable is 1. They form straight lines when graphed. The standard form is ax + b = c, where a, b, and c are constants. To solve linear equations, we use inverse operations to isolate the variable. The goal is to get the variable alone on one side of the equals sign. For example, to solve 3x + 2 = 11, we first subtract 2 from both sides: 3x = 9, then divide by 3: x = 3. We must perform the same operation on both sides to maintain equality. Linear equations can have one solution, no solution (like 2x = 2x + 1), or infinitely many solutions (like 2x = 2x). These equations model many real-world situations, such as calculating costs, distances, and rates of change. Understanding linear equations is essential for algebra and provides the foundation for more advanced mathematics.', 
                examples: ['3x + 2 = 11 → subtract 2: 3x = 9 → divide by 3: x = 3', '2x - 5 = 7 → add 5: 2x = 12 → divide by 2: x = 6', 'Always perform the same operation on both sides', 'Check your answer by substituting back into the original equation', 'Linear equations graph as straight lines'], 
                grade: 9 
            },
            { 
                id: 'math_9_3', 
                title: 'Graphing Linear Functions', 
                content: 'Graphing linear functions helps us visualize relationships between variables. The slope-intercept form y = mx + b is the most common way to write linear equations. Here, m represents the slope (steepness) and b represents the y-intercept (where the line crosses the y-axis). The slope tells us how much y changes for each unit change in x. A positive slope means the line goes up from left to right, while a negative slope means it goes down. To graph a line, we can start at the y-intercept (0, b) and use the slope to find other points. For example, with y = 2x + 3, we start at (0, 3) and use slope 2 (rise 2, run 1) to plot additional points. We can also use a table of values or find x and y intercepts. Understanding graphs helps us interpret data, make predictions, and solve problems visually. Linear graphs appear in many contexts: distance-time relationships, cost functions, and temperature conversions.', 
                examples: ['y = 2x + 3 has slope 2 and y-intercept 3', 'Graph the line y = -x + 5: start at (0,5), slope is -1', 'Slope = rise/run = change in y / change in x', 'Horizontal lines have slope 0, vertical lines have undefined slope', 'Two points determine a unique line'], 
                grade: 9 
            },
            { 
                id: 'math_9_4', 
                title: 'Systems of Equations', 
                content: 'A system of equations consists of two or more equations with the same variables. The solution to a system is the set of values that satisfies all equations simultaneously. Systems can be solved using several methods. The substitution method involves solving one equation for a variable and substituting that expression into the other equation. The elimination method involves adding or subtracting equations to eliminate one variable. For example, to solve x + y = 5 and 2x - y = 1, we can add the equations: (x + y) + (2x - y) = 5 + 1, giving 3x = 6, so x = 2. Substituting back, y = 3. Systems can have one solution (intersecting lines), no solution (parallel lines), or infinitely many solutions (same line). Graphing both equations helps visualize the solution. Systems model real-world situations where multiple conditions must be met simultaneously, such as finding break-even points in business or solving mixture problems.', 
                examples: ['x + y = 5 and 2x - y = 1: add equations to get 3x = 6, so x = 2, y = 3', 'Use substitution or elimination method', 'Graph both lines to see where they intersect', 'Systems can have one, none, or infinite solutions', 'Check your solution by substituting into both original equations'], 
                grade: 9 
            },
            { 
                id: 'math_9_5', 
                title: 'Quadratic Equations', 
                content: 'Quadratic equations are polynomial equations of degree 2, with the general form ax² + bx + c = 0, where a ≠ 0. These equations create parabolic curves when graphed. There are several methods to solve quadratics. Factoring involves rewriting the equation as a product of two binomials. For x² + 5x + 6 = 0, we factor to (x + 2)(x + 3) = 0, giving solutions x = -2 or x = -3. The quadratic formula x = (-b ± √(b² - 4ac)) / 2a works for all quadratic equations. Completing the square is another method that involves manipulating the equation to create a perfect square trinomial. The discriminant (b² - 4ac) tells us about the nature of solutions: positive means two real solutions, zero means one solution, and negative means two complex solutions. Quadratics model many real-world phenomena including projectile motion, area problems, and optimization scenarios.', 
                examples: ['x² + 5x + 6 = 0 factors to (x+2)(x+3) = 0, so x = -2 or -3', 'Use quadratic formula for ax² + bx + c = 0', 'The discriminant b² - 4ac determines the number of solutions', 'Quadratic graphs are parabolas that open up or down', 'Factoring works when the quadratic can be written as (x + p)(x + q)'], 
                grade: 9 
            },
            { 
                id: 'math_9_6', 
                title: 'Exponents and Radicals', 
                content: 'Exponents represent repeated multiplication. For example, 2³ means 2 × 2 × 2 = 8. The base is the number being multiplied, and the exponent tells us how many times to multiply it. Key exponent rules include: when multiplying powers with the same base, add exponents (x² × x³ = x⁵); when dividing, subtract exponents (x⁵ ÷ x² = x³); when raising a power to a power, multiply exponents ((x²)³ = x⁶); and any number to the zero power equals 1 (x⁰ = 1). Radicals are the inverse operation of exponents. The square root (√) undoes squaring: √16 = 4 because 4² = 16. Higher roots include cube roots (³√), fourth roots, etc. We can simplify radicals by finding perfect square factors. For example, √12 = √(4 × 3) = 2√3. Understanding exponents and radicals is essential for working with scientific notation, solving equations, and understanding exponential growth and decay in real-world applications.', 
                examples: ['2³ = 2 × 2 × 2 = 8', '√16 = 4 because 4² = 16', 'x² × x³ = x⁵ (add exponents when multiplying)', 'x⁵ ÷ x² = x³ (subtract exponents when dividing)', 'Any number to the zero power equals 1'], 
                grade: 9 
            }
        ],
        12: [
            { 
                id: 'math_12_1', 
                title: 'Calculus: Limits', 
                content: 'Limits are fundamental to calculus, describing the behavior of functions as inputs approach a particular value. A limit answers: "What value does the function approach as x gets closer and closer to a specific number?" The notation lim(x→a) f(x) = L means that as x approaches a, f(x) approaches L. Limits can exist even when the function is undefined at that point. For example, lim(x→2) x² = 4, meaning as x gets closer to 2, x² gets closer to 4. We evaluate limits using direct substitution, factoring, rationalizing, or L\'Hôpital\'s rule for indeterminate forms. One-sided limits examine approach from the left (x→a⁻) or right (x→a⁺). A limit exists only if both one-sided limits are equal. Continuity means a function has no breaks, jumps, or holes - the limit equals the function value. Understanding limits is essential for defining derivatives and integrals, the two main operations in calculus. Limits help us understand instantaneous rates of change and areas under curves.', 
                examples: ['lim(x→2) x² = 4 (as x approaches 2, x² approaches 4)', 'Understand approaching values, not necessarily the value at the point', 'One-sided limits examine approach from left or right', 'Continuity requires the limit to equal the function value', 'Limits can exist even when function is undefined at that point'], 
                grade: 12 
            },
            { 
                id: 'math_12_2', 
                title: 'Derivatives', 
                content: 'Derivatives measure instantaneous rates of change - how quickly a function\'s output changes as its input changes. The derivative of f(x) at point a, written f\'(a) or df/dx, represents the slope of the tangent line at that point. Geometrically, it\'s the limit of secant line slopes as the second point approaches the first. The derivative function f\'(x) gives the rate of change at any point. Basic derivative rules include: power rule (d/dx(xⁿ) = nxⁿ⁻¹), constant rule (derivative of constant is 0), sum rule (derivative of sum is sum of derivatives), product rule, quotient rule, and chain rule for composite functions. Derivatives of trigonometric functions: d/dx(sin x) = cos x, d/dx(cos x) = -sin x. Derivatives of exponential and logarithmic functions are also important. The derivative tells us where functions increase or decrease, find maximums and minimums, and understand motion (velocity is derivative of position, acceleration is derivative of velocity). Derivatives are foundational for optimization, related rates, and curve sketching.', 
                examples: ['d/dx(x²) = 2x (power rule)', 'd/dx(sin x) = cos x (trigonometric derivative)', 'Derivative represents instantaneous rate of change', 'Use product rule, quotient rule, and chain rule for complex functions', 'Velocity is the derivative of position with respect to time'], 
                grade: 12 
            },
            { 
                id: 'math_12_3', 
                title: 'Integration', 
                content: 'Integration is the reverse process of differentiation, finding the original function from its derivative (antiderivative). The indefinite integral ∫f(x)dx represents all antiderivatives of f(x), always including +C (constant of integration) since derivatives of constants are zero. The definite integral ∫[a to b] f(x)dx calculates the net area under the curve between x=a and x=b, using the Fundamental Theorem of Calculus which connects derivatives and integrals. Basic integration rules include: power rule (∫xⁿ dx = xⁿ⁺¹/(n+1) + C), constant rule, sum rule, and substitution method for composite functions. Integration techniques include u-substitution, integration by parts, and partial fractions. Applications of integrals include finding areas, volumes of revolution, work done by forces, and average values. Understanding integration allows us to solve accumulation problems, calculate total change from rates of change, and find areas and volumes of complex shapes. Integration and differentiation are inverse operations, forming the foundation of calculus.', 
                examples: ['∫x dx = x²/2 + C (power rule for integration)', '∫2x dx = x² + C', 'Definite integrals calculate area under curves', 'Always include +C for indefinite integrals', 'Integration is the reverse of differentiation'], 
                grade: 12 
            },
            { 
                id: 'math_12_4', 
                title: 'Applications of Derivatives', 
                content: 'Derivatives have powerful real-world applications. Finding maximum and minimum values uses the fact that derivatives are zero (or undefined) at extrema. The first derivative test examines sign changes: if f\'(x) changes from positive to negative, there\'s a local maximum; if negative to positive, a local minimum. The second derivative test uses concavity: if f\'\'(x) > 0, the function is concave up (minimum); if f\'\'(x) < 0, concave down (maximum). Optimization problems involve finding the best solution under constraints - maximizing area given perimeter, minimizing cost given requirements, etc. Related rates problems involve quantities changing together: if one rate is known, use the chain rule to find the other. Motion applications: position s(t), velocity v(t) = s\'(t), acceleration a(t) = v\'(t) = s\'\'(t). Business applications include marginal cost (derivative of cost function) and maximizing profit. Understanding these applications shows how calculus solves practical problems in engineering, economics, physics, and many other fields.', 
                examples: ['Find maximum area by setting derivative equal to zero', 'Calculate velocity from position: v(t) = s\'(t)', 'Use first and second derivative tests to find extrema', 'Optimization: maximize or minimize under constraints', 'Related rates: find one rate when another is known'], 
                grade: 12 
            },
            { 
                id: 'math_12_5', 
                title: 'Advanced Trigonometry', 
                content: 'Advanced trigonometry extends beyond basic right triangle relationships to explore trigonometric functions as periodic functions with applications throughout mathematics and science. The unit circle provides a powerful way to understand trig functions: any angle corresponds to a point on the circle, with coordinates (cos θ, sin θ). Key identities include the Pythagorean identity sin²θ + cos²θ = 1, which holds for all angles. Other important identities: tan θ = sin θ / cos θ, reciprocal identities (csc, sec, cot), double-angle formulas (sin 2θ = 2 sin θ cos θ), and sum/difference formulas. Trigonometric functions are periodic: sin and cos have period 2π, tan has period π. They model periodic phenomena: sound waves, light waves, alternating current, and seasonal patterns. Inverse trigonometric functions (arcsin, arccos, arctan) find angles from ratios. Solving trigonometric equations requires understanding periodicity and using identities. Applications include modeling harmonic motion, analyzing waves, solving triangles in navigation and surveying, and working with complex numbers using Euler\'s formula.', 
                examples: ['sin²θ + cos²θ = 1 (Pythagorean identity)', 'tan θ = sin θ / cos θ (ratio identity)', 'Trigonometric functions are periodic with specific periods', 'Use identities to simplify and solve equations', 'Unit circle provides values for all angles'], 
                grade: 12 
            },
            { 
                id: 'math_12_6', 
                title: 'Probability and Statistics', 
                content: 'Probability and statistics provide tools for understanding uncertainty, making predictions, and analyzing data. Probability measures likelihood, ranging from 0 (impossible) to 1 (certain). Basic probability: P(event) = favorable outcomes / total outcomes. Conditional probability P(A|B) is the probability of A given B has occurred. Independent events don\'t affect each other: P(A and B) = P(A) × P(B). The binomial distribution models repeated independent trials with two outcomes. The normal distribution (bell curve) describes many natural phenomena and is characterized by mean (μ) and standard deviation (σ). The empirical rule states: 68% of data falls within 1σ, 95% within 2σ, 99.7% within 3σ of the mean. Statistical measures include mean (average), median (middle value), mode (most frequent), and standard deviation (spread). Hypothesis testing uses sample data to make inferences about populations. Confidence intervals estimate population parameters. Understanding probability and statistics is essential for data analysis, scientific research, risk assessment, and making informed decisions in uncertain situations.', 
                examples: ['Normal distribution describes many natural phenomena', 'Binomial probability models repeated independent trials', 'Mean and standard deviation characterize distributions', 'Use probability to make predictions and assess risk', 'Statistics help analyze data and make inferences'], 
                grade: 12 
            }
        ]
    },
    science: {
        6: [
            { 
                id: 'science_6_1', 
                title: 'Introduction to Cells', 
                content: 'Cells are the fundamental units of life, the smallest structures capable of performing all the functions necessary for life. Every living organism, from the smallest bacteria to the largest whale, is made up of cells. Cells come in two main types: prokaryotic cells (like bacteria) which lack a nucleus, and eukaryotic cells (like those in plants and animals) which have a nucleus containing DNA. The cell membrane acts as a protective barrier, controlling what enters and exits the cell. Inside the cell, various organelles perform specific functions: the nucleus contains genetic material, mitochondria produce energy, and the endoplasmic reticulum helps transport materials. Plant cells have additional structures like cell walls for support and chloroplasts for photosynthesis. Understanding cells helps us comprehend how living things function, grow, and reproduce. The study of cells, called cell biology, is fundamental to understanding health, disease, and the diversity of life on Earth.', 
                examples: ['Cells are the building blocks of all living things', 'Plant cells have cell walls and chloroplasts', 'Animal cells have a flexible cell membrane', 'The nucleus contains DNA, the genetic blueprint', 'Mitochondria are the powerhouses of the cell'], 
                grade: 6 
            },
            { 
                id: 'science_6_2', 
                title: 'States of Matter', 
                content: 'Matter exists in three primary states: solid, liquid, and gas. These states depend on how tightly particles are packed and how much they move. In solids, particles are tightly packed in a fixed arrangement and vibrate in place, giving solids a definite shape and volume. Examples include ice, wood, and metal. In liquids, particles are close together but can move past each other, allowing liquids to flow and take the shape of their container while maintaining a constant volume. Water, oil, and juice are liquids. In gases, particles are far apart and move freely, so gases have no definite shape or volume and expand to fill their container. Air, steam, and helium are gases. Matter can change states through processes like melting (solid to liquid), freezing (liquid to solid), evaporation (liquid to gas), and condensation (gas to liquid). Temperature and pressure affect these changes. Understanding states of matter helps us explain everyday phenomena like why ice melts, how clouds form, and why balloons expand.', 
                examples: ['Ice is solid water with particles in fixed positions', 'Water vapor is a gas with particles moving freely', 'Liquid water flows because particles can move past each other', 'Melting occurs when a solid gains enough energy to become a liquid', 'Evaporation happens when liquid particles gain energy and become gas'], 
                grade: 6 
            },
            { 
                id: 'science_6_3', 
                title: 'The Solar System', 
                content: 'Our solar system is a vast collection of celestial objects orbiting the Sun, held together by gravity. At the center is the Sun, a star that provides light and heat to all the planets. The eight planets orbit the Sun in elliptical paths: Mercury, Venus, Earth, and Mars are the inner rocky planets, while Jupiter, Saturn, Uranus, and Neptune are the outer gas giants. Earth, the third planet from the Sun, is unique in having liquid water and supporting life. Jupiter is the largest planet and has a Great Red Spot, a massive storm larger than Earth. Many planets have moons; Earth has one moon, while Jupiter has over 80. The asteroid belt lies between Mars and Jupiter, containing rocky remnants from the solar system\'s formation. Beyond Neptune lies the Kuiper Belt, home to dwarf planets like Pluto. Comets, made of ice and dust, orbit the Sun in long elliptical paths. Understanding our solar system helps us appreciate Earth\'s place in the universe and inspires exploration of space.', 
                examples: ['Earth is the third planet from the sun and the only known planet with life', 'Jupiter is the largest planet with a Great Red Spot storm', 'Mars is known as the red planet due to iron oxide on its surface', 'Saturn has beautiful rings made of ice and rock particles', 'The asteroid belt separates the inner and outer planets'], 
                grade: 6 
            },
            { 
                id: 'science_6_4', 
                title: 'Food Chains and Webs', 
                content: 'Food chains and food webs show how energy flows through ecosystems. A food chain is a linear sequence showing who eats whom, starting with producers (plants that make their own food through photosynthesis) and moving through various levels of consumers. Primary consumers (herbivores) eat plants, secondary consumers (carnivores) eat herbivores, and tertiary consumers eat other carnivores. Decomposers like bacteria and fungi break down dead organisms, returning nutrients to the soil. Food webs are more complex, showing multiple interconnected food chains, which better represent real ecosystems where most organisms eat and are eaten by multiple species. Energy is lost at each level (about 90%), which is why there are fewer top predators than producers. This energy pyramid explains why ecosystems need many more plants than animals. Understanding food chains and webs helps us see how all living things are connected and how changes in one part of an ecosystem can affect the entire system.', 
                examples: ['Plants are producers that make food through photosynthesis', 'Carnivores eat other animals for energy', 'Herbivores eat plants and are primary consumers', 'Decomposers break down dead organisms and recycle nutrients', 'Energy decreases at each level of the food chain'], 
                grade: 6 
            },
            { 
                id: 'science_6_5', 
                title: 'Weather and Climate', 
                content: 'Weather and climate are related but different concepts. Weather describes short-term atmospheric conditions in a specific place and time, including temperature, humidity, precipitation, wind speed, and atmospheric pressure. Weather changes daily and can vary greatly even within a small area. Climate, on the other hand, describes long-term patterns of weather in a region, typically measured over 30 years or more. Climate determines what types of plants and animals can live in an area. Factors affecting weather include the Sun\'s energy, air pressure, humidity, and wind patterns. Weather systems move across the Earth, bringing changes in conditions. Climate is influenced by latitude, altitude, proximity to oceans, and global wind patterns. Understanding weather helps us plan daily activities and prepare for storms, while understanding climate helps us predict long-term environmental changes and their impacts on ecosystems and human societies.', 
                examples: ['Temperature, humidity, and pressure all affect daily weather', 'Climate is long-term weather patterns over decades', 'Weather can change quickly, but climate changes slowly', 'Different regions have different climates (tropical, desert, polar)', 'Weather forecasts predict short-term conditions, climate models predict long-term trends'], 
                grade: 6 
            },
            { 
                id: 'science_6_6', 
                title: 'Simple Machines', 
                content: 'Simple machines are basic mechanical devices that make work easier by changing the direction or magnitude of a force. There are six types of simple machines: the lever, pulley, wheel and axle, inclined plane, wedge, and screw. A lever consists of a rigid bar that pivots on a fulcrum, allowing us to lift heavy objects with less force. Examples include seesaws, crowbars, and scissors. Pulleys use a wheel with a rope to change the direction of force, making it easier to lift objects vertically. Wheel and axle combinations, like doorknobs and car wheels, allow rotation with less effort. Inclined planes (ramps) reduce the force needed to move objects upward by increasing the distance traveled. Wedges, like knives and axes, split or hold objects apart. Screws are essentially inclined planes wrapped around a cylinder, used to hold things together or lift objects. These simple machines can be combined to create complex machines. Understanding simple machines helps us design tools and understand how mechanical advantage works in everyday devices.', 
                examples: ['A lever helps lift heavy objects with less force', 'Pulleys change the direction of force, making lifting easier', 'Wheel and axle combinations reduce friction and effort', 'Inclined planes (ramps) make it easier to move objects up', 'Simple machines can be combined to create complex machines'], 
                grade: 6 
            }
        ],
        9: [
            { 
                id: 'science_9_1', 
                title: 'Cell Biology', 
                content: 'Cell biology explores the intricate structures and functions within cells. Eukaryotic cells contain membrane-bound organelles, each with specific roles. The nucleus, the control center, houses DNA and directs cellular activities. Mitochondria, often called the powerhouses, produce ATP through cellular respiration, converting glucose and oxygen into energy. The endoplasmic reticulum (ER) is a network of membranes: rough ER has ribosomes and synthesizes proteins, while smooth ER produces lipids and detoxifies substances. The Golgi apparatus modifies, packages, and ships proteins to their destinations. Lysosomes contain enzymes that break down waste materials. Plant cells have chloroplasts for photosynthesis, converting light energy into chemical energy. The cell membrane, made of a phospholipid bilayer, controls what enters and exits, maintaining homeostasis. Understanding these organelles and their interactions reveals how cells function as complex, coordinated systems essential for life.', 
                examples: ['Mitochondria produce ATP, the cell\'s energy currency', 'The nucleus contains DNA and controls cell activities', 'Ribosomes on rough ER synthesize proteins', 'Chloroplasts in plant cells perform photosynthesis', 'The cell membrane maintains homeostasis by controlling transport'], 
                grade: 9 
            },
            { 
                id: 'science_9_2', 
                title: 'Genetics and Heredity', 
                content: 'Genetics is the study of how traits are passed from parents to offspring through genes. DNA (deoxyribonucleic acid) is the molecule that carries genetic information in the form of a double helix. Genes are segments of DNA that code for specific proteins, which determine traits. Chromosomes are long strands of DNA wrapped around proteins, and humans have 46 chromosomes (23 pairs). During reproduction, parents each contribute half their chromosomes, creating genetic variation. Dominant traits mask recessive traits, while recessive traits only appear when both alleles are recessive. Punnett squares are tools that predict the probability of offspring inheriting specific traits. Genotype refers to the genetic makeup (like AA, Aa, or aa), while phenotype is the observable trait. Understanding genetics explains family resemblances, genetic diseases, and how selective breeding works. Modern genetics has applications in medicine, agriculture, and biotechnology.', 
                examples: ['Genes determine traits like eye color and height', 'Punnett squares predict offspring genotypes and phenotypes', 'DNA contains the genetic code in a double helix structure', 'Dominant alleles mask recessive alleles', 'Humans inherit 23 chromosomes from each parent'], 
                grade: 9 
            },
            { 
                id: 'science_9_3', 
                title: 'Chemical Reactions', 
                content: 'Chemical reactions are processes where substances (reactants) transform into new substances (products) through breaking and forming chemical bonds. The law of conservation of mass states that matter cannot be created or destroyed, so chemical equations must be balanced with equal numbers of each type of atom on both sides. Types of reactions include synthesis (combining elements), decomposition (breaking compounds apart), single replacement (one element replaces another), double replacement (ions exchange partners), and combustion (reaction with oxygen producing heat and light). Reaction rates depend on factors like temperature, concentration, surface area, and catalysts. Exothermic reactions release energy (like burning), while endothermic reactions absorb energy (like photosynthesis). Understanding chemical reactions explains how batteries work, how our bodies digest food, how rust forms, and how countless industrial processes function. Balancing equations requires understanding chemical formulas and stoichiometry.', 
                examples: ['2H₂ + O₂ → 2H₂O shows the formation of water', 'Conservation of mass: atoms are rearranged, not created or destroyed', 'Balanced equations have equal atoms on both sides', 'Reaction rates increase with temperature and concentration', 'Catalysts speed up reactions without being consumed'], 
                grade: 9 
            },
            { 
                id: 'science_9_4', 
                title: 'Forces and Motion', 
                content: 'Physics studies forces and motion through Newton\'s three laws of motion. Newton\'s first law (inertia) states that objects at rest stay at rest, and objects in motion stay in motion at constant velocity, unless acted upon by an unbalanced force. This explains why seatbelts are necessary and why objects slide on ice. Newton\'s second law (F = ma) relates force, mass, and acceleration: force equals mass times acceleration. This means larger forces cause greater acceleration, and heavier objects require more force to accelerate. Newton\'s third law states that for every action, there is an equal and opposite reaction. When you push on a wall, the wall pushes back with equal force. Forces can be contact forces (like friction and normal force) or field forces (like gravity and magnetism). Understanding forces and motion explains how cars move, how rockets launch, how athletes perform, and how planets orbit. Motion is described by displacement, velocity, and acceleration.', 
                examples: ['F = ma: Force equals mass times acceleration', 'Action and reaction forces are equal and opposite', 'Inertia explains why objects resist changes in motion', 'Friction opposes motion between surfaces', 'Gravity is a force that pulls objects toward Earth'], 
                grade: 9 
            },
            { 
                id: 'science_9_5', 
                title: 'Energy and Work', 
                content: 'Energy is the ability to do work, and work is done when a force causes an object to move. Energy exists in many forms: kinetic energy (energy of motion, KE = ½mv²), potential energy (stored energy, like gravitational PE = mgh), thermal energy (heat), chemical energy (stored in bonds), electrical energy, and nuclear energy. The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another. For example, a roller coaster converts potential energy at the top into kinetic energy as it descends. Work is calculated as force times distance (W = Fd) when the force and motion are in the same direction. Power is the rate at which work is done (P = W/t). Understanding energy transformations explains how engines work, how batteries power devices, how food provides energy for our bodies, and how renewable energy sources like solar and wind can be harnessed. Efficiency measures how much useful energy output we get compared to energy input.', 
                examples: ['Kinetic energy = ½mv² depends on mass and velocity', 'Potential energy = mgh depends on height and mass', 'Energy transforms but is never created or destroyed', 'Work = force × distance when force and motion align', 'Power measures how quickly work is done'], 
                grade: 9 
            },
            { 
                id: 'science_9_6', 
                title: 'Ecology and Ecosystems', 
                content: 'Ecology studies how organisms interact with each other and their environment. An ecosystem includes all living (biotic) and non-living (abiotic) components in an area. Biotic factors include plants, animals, fungi, and bacteria, while abiotic factors include sunlight, water, temperature, soil, and air. Ecosystems have trophic levels: producers (plants), primary consumers (herbivores), secondary consumers (carnivores), and decomposers. Energy flows through ecosystems in one direction, while nutrients cycle. The water cycle, carbon cycle, and nitrogen cycle are essential nutrient cycles. Biodiversity, the variety of life, is crucial for ecosystem stability and resilience. Ecosystems can be terrestrial (forests, deserts, grasslands) or aquatic (oceans, lakes, rivers). Human activities like deforestation, pollution, and climate change impact ecosystems. Understanding ecology helps us protect biodiversity, manage resources sustainably, and address environmental challenges. Conservation biology works to preserve ecosystems and species for future generations.', 
                examples: ['Food webs show complex energy flow through ecosystems', 'Biodiversity supports ecosystem stability and resilience', 'Nutrient cycles recycle materials through ecosystems', 'Abiotic factors like temperature affect which organisms can survive', 'Human activities can disrupt ecosystem balance'], 
                grade: 9 
            }
        ],
        12: [
            { 
                id: 'science_12_1', 
                title: 'Advanced Chemistry: Organic Compounds', 
                content: 'Organic chemistry focuses on carbon-based compounds, which form the basis of all life. Carbon\'s ability to form four covalent bonds allows incredible molecular diversity. Hydrocarbons contain only carbon and hydrogen: alkanes (single bonds, like methane CH₄), alkenes (double bonds, like ethene C₂H₄), and alkynes (triple bonds, like ethyne C₂H₂). Functional groups are specific atom arrangements that determine chemical properties: hydroxyl (-OH) in alcohols, carbonyl (C=O) in aldehydes and ketones, carboxyl (-COOH) in carboxylic acids, and amino (-NH₂) in amines. Isomers are compounds with the same molecular formula but different structures. Naming follows IUPAC rules based on carbon chain length and functional groups. Organic reactions include substitution, addition, elimination, and oxidation-reduction. Understanding organic chemistry explains biological molecules (proteins, DNA, carbohydrates, lipids), pharmaceuticals, plastics, and countless industrial products. This field bridges chemistry and biology, explaining life at the molecular level.', 
                examples: ['Hydrocarbons are organic compounds with only C and H', 'Functional groups determine properties and reactivity', 'Isomers have same formula but different structures', 'IUPAC naming provides systematic compound names', 'Organic reactions include substitution, addition, elimination'], 
                grade: 12 
            },
            { 
                id: 'science_12_2', 
                title: 'Molecular Biology', 
                content: 'Molecular biology explores how genetic information flows from DNA to proteins, the central dogma of biology. DNA replication creates identical copies before cell division: the double helix unwinds, and each strand serves as a template for a new complementary strand. Transcription converts DNA to RNA: RNA polymerase reads the DNA template and synthesizes messenger RNA (mRNA). The genetic code is universal - three-nucleotide codons specify amino acids. Translation occurs at ribosomes where transfer RNA (tRNA) brings amino acids matching mRNA codons, building proteins according to the genetic instructions. Gene expression is regulated at multiple levels: transcription factors control when genes are transcribed, and post-transcriptional modifications affect mRNA stability and translation. Mutations are changes in DNA sequence that can alter protein function. Understanding molecular biology explains how genes control traits, how diseases arise from genetic mutations, and how biotechnology can manipulate genetic information for medical and agricultural applications. This field is fundamental to genetics, medicine, and biotechnology.', 
                examples: ['DNA → RNA → Protein (central dogma)', 'Genetic code is universal across all life', 'Transcription creates mRNA from DNA template', 'Translation builds proteins from mRNA at ribosomes', 'Gene expression is regulated at multiple levels'], 
                grade: 12 
            },
            { 
                id: 'science_12_3', 
                title: 'Physics: Electromagnetism', 
                content: 'Electromagnetism unifies electricity and magnetism as aspects of a single electromagnetic force. Electric charges create electric fields, and moving charges (current) create magnetic fields. Opposite charges attract, like charges repel - described by Coulomb\'s law. Electric current is the flow of charge, measured in amperes. Resistance opposes current flow, and Ohm\'s law relates voltage (V), current (I), and resistance (R): V = IR. Magnetic fields are created by moving charges and permanent magnets. The right-hand rule determines magnetic field direction around a current-carrying wire. Electromagnetic induction occurs when changing magnetic fields create electric currents - the principle behind generators and transformers. Maxwell\'s equations describe how electric and magnetic fields interact and how they propagate as electromagnetic waves (light, radio, X-rays). Understanding electromagnetism explains how motors work, how power is generated and transmitted, how electronic devices function, and the nature of light itself. This field underlies modern technology from computers to medical imaging.', 
                examples: ['Opposite charges attract, like charges repel', 'Current creates magnetic fields around wires', 'Electromagnetic induction generates electricity', 'Ohm\'s law: V = IR relates voltage, current, resistance', 'Electromagnetic waves include light, radio, and X-rays'], 
                grade: 12 
            },
            { 
                id: 'science_12_4', 
                title: 'Thermodynamics', 
                content: 'Thermodynamics studies energy, heat, and their transformations. The first law (conservation of energy) states that energy cannot be created or destroyed, only converted between forms. Internal energy changes equal heat added minus work done: ΔU = Q - W. The second law states that entropy (disorder) tends to increase in isolated systems - processes naturally move toward greater disorder. Heat engines convert thermal energy to mechanical work but are limited by efficiency based on temperature differences. Entropy measures energy dispersal and system disorder. Spontaneous processes increase total entropy. The third law states that absolute zero cannot be reached. Thermodynamic processes include isothermal (constant temperature), adiabatic (no heat transfer), isobaric (constant pressure), and isochoric (constant volume). Understanding thermodynamics explains why engines have efficiency limits, how refrigerators work, why some reactions occur spontaneously while others don\'t, and fundamental limits on energy conversion. This field is crucial for engineering, chemistry, and understanding energy systems and climate science.', 
                examples: ['First law: Energy is conserved in all processes', 'Second law: Entropy increases in isolated systems', 'Heat engines have efficiency limits based on temperatures', 'Spontaneous processes increase total entropy', 'Absolute zero cannot be reached (third law)'], 
                grade: 12 
            },
            { 
                id: 'science_12_5', 
                title: 'Evolution and Natural Selection', 
                content: 'Evolution explains how species change over time through natural selection and other mechanisms. Natural selection occurs when heritable traits that improve survival and reproduction become more common in populations. Variation exists within populations due to genetic mutations and recombination. Environmental pressures (predation, competition, climate) favor certain traits. Individuals with advantageous traits survive and reproduce more, passing those traits to offspring. Over generations, populations adapt to their environments. Genetic drift is random changes in allele frequencies, especially important in small populations. Gene flow occurs when individuals migrate between populations, introducing new genetic variation. Speciation happens when populations become reproductively isolated and diverge into separate species. Evidence for evolution includes fossil records showing gradual changes, comparative anatomy revealing homologous structures, molecular biology showing genetic similarities, and observed evolution in real-time (like antibiotic resistance). Understanding evolution explains biodiversity, how species adapt, why some traits persist, and how all life is connected through common ancestry. This unifying theory explains life\'s diversity and history.', 
                examples: ['Natural selection favors beneficial traits that improve survival', 'Genetic drift affects small populations through random changes', 'Gene flow introduces new variation between populations', 'Speciation occurs when populations become reproductively isolated', 'Evidence includes fossils, anatomy, molecular biology, and observed changes'], 
                grade: 12 
            },
            { 
                id: 'science_12_6', 
                title: 'Environmental Science', 
                content: 'Environmental science studies human impacts on ecosystems and seeks sustainable solutions. Human activities have dramatically altered Earth\'s systems: deforestation reduces carbon sinks and biodiversity, pollution contaminates air, water, and soil, and greenhouse gas emissions drive climate change. Climate change causes rising temperatures, sea level rise, extreme weather, and ecosystem disruptions. Biodiversity loss threatens ecosystem stability and services we depend on. Resource depletion (water, minerals, fossil fuels) raises sustainability concerns. Environmental science applies principles from biology, chemistry, physics, and social sciences to understand these complex interactions. Solutions include renewable energy (solar, wind, hydro), conservation strategies, sustainable agriculture, waste reduction, and policy interventions. The concept of carrying capacity describes maximum population an environment can support. Ecological footprints measure resource consumption. Understanding environmental science helps us make informed decisions about resource use, develop sustainable practices, address climate change, and preserve ecosystems for future generations. This interdisciplinary field is crucial for addressing global environmental challenges.', 
                examples: ['Climate change effects include rising temperatures and sea levels', 'Conservation strategies protect biodiversity and ecosystems', 'Renewable energy reduces environmental impact', 'Sustainable practices balance human needs with environmental protection', 'Ecological footprints measure resource consumption'], 
                grade: 12 
            }
        ]
    },
    reading: {
        6: [
            { 
                id: 'reading_6_1', 
                title: 'Reading Comprehension Basics', 
                content: 'Reading comprehension is the ability to understand, analyze, and interpret written text. Effective comprehension involves several key strategies. First, identify the main idea - the central point the author wants to convey. This is often found in the first or last sentence of a paragraph. Supporting details provide evidence, examples, and explanations that reinforce the main idea. Good readers actively engage with text by asking questions, making predictions, and connecting new information to prior knowledge. Skimming helps get an overview, while scanning helps find specific information quickly. Understanding text structure (chronological, cause-effect, compare-contrast) helps organize information mentally. Vocabulary knowledge is crucial - use context clues from surrounding words to determine meanings of unfamiliar terms. Practice these strategies regularly to improve comprehension skills and become a more effective reader across all subjects.', 
                examples: ['Identify main ideas in each paragraph', 'Find supporting details that explain the main idea', 'Use context clues to understand unfamiliar words', 'Ask questions while reading to stay engaged', 'Connect new information to what you already know'], 
                grade: 6 
            },
            { 
                id: 'reading_6_2', 
                title: 'Vocabulary Building', 
                content: 'Building a strong vocabulary is essential for reading comprehension and effective communication. Context clues are words or phrases surrounding an unknown word that provide hints about its meaning. Types of context clues include definition (the word is defined nearby), synonym (similar words nearby), antonym (opposite words), example (examples that illustrate the word), and inference (you must infer meaning from the situation). Word roots, prefixes, and suffixes are powerful tools: understanding that "bio" means life helps with biology, biography, and biosphere. Prefixes like "un-" (not), "re-" (again), and "pre-" (before) change word meanings. Suffixes like "-tion" (action or process) and "-able" (capable of) also provide meaning clues. Keep a vocabulary journal, read widely, and practice using new words in writing and conversation. The more words you know, the better you can understand complex texts and express your ideas clearly.', 
                examples: ['Use surrounding words to understand meaning', 'Learn word roots and prefixes to decode new words', 'Keep a vocabulary journal of new words you encounter', 'Practice using new words in sentences', 'Read widely to encounter diverse vocabulary'], 
                grade: 6 
            },
            { 
                id: 'reading_6_3', 
                title: 'Story Elements', 
                content: 'Stories are built from essential elements that work together to create meaning. Characters are the people, animals, or beings in a story. Main characters drive the plot, while supporting characters add depth. Character traits (personality, appearance, behavior) help us understand and relate to them. Setting includes both time (when) and place (where) the story occurs, creating atmosphere and context. Plot is the sequence of events, typically following a structure: exposition (introduction), rising action (conflicts develop), climax (turning point), falling action (resolution begins), and resolution (conclusion). Conflict is the problem or struggle characters face - it can be internal (within a character) or external (with others, nature, or society). Theme is the underlying message or lesson the author wants to convey, often about human nature, society, or life. Understanding these elements helps us analyze stories, predict outcomes, and appreciate how authors craft narratives.', 
                examples: ['Characters drive the story and have traits we can identify', 'Setting is where and when the story takes place', 'Plot is the sequence of events from beginning to end', 'Conflict creates tension and drives the story forward', 'Theme is the deeper message or lesson of the story'], 
                grade: 6 
            },
            { 
                id: 'reading_6_4', 
                title: 'Making Inferences', 
                content: 'Making inferences means drawing conclusions based on evidence from the text combined with your own knowledge and experience. Authors don\'t always state everything explicitly - they expect readers to "read between the lines." To make good inferences, look for clues in the text: character actions, dialogue, descriptions, and events. Combine these textual clues with your background knowledge about how people behave, how the world works, and common situations. For example, if a character is shivering and wearing a coat, you can infer it\'s cold outside, even if the text doesn\'t say so directly. Inferences help us understand character motivations, predict what might happen next, and grasp deeper meanings. Practice by asking "Why?" questions about character actions and "What does this suggest?" about events. Strong inference skills make you a more engaged and insightful reader, able to understand implicit meanings and appreciate subtle storytelling techniques.', 
                examples: ['Use clues from the text to draw conclusions', 'Combine text evidence with your own knowledge', 'Infer character feelings from their actions', 'Predict outcomes based on story clues', 'Understand implied meanings that aren\'t directly stated'], 
                grade: 6 
            },
            { 
                id: 'reading_6_5', 
                title: 'Summarizing', 
                content: 'Summarizing is the skill of condensing a text into its most important points using your own words. A good summary captures the main ideas and key supporting details while omitting less important information. Start by identifying the main idea of each paragraph or section. Then, determine which details are essential for understanding and which can be omitted. Use your own words rather than copying directly from the text - this shows you truly understand the content. A summary should be significantly shorter than the original while maintaining the essential meaning. For fiction, summarize the main plot points, key character actions, and resolution. For nonfiction, focus on the main topic, key facts, and important conclusions. Practice summarizing helps improve comprehension, retention, and the ability to communicate information clearly and concisely. This skill is valuable for note-taking, studying, and explaining concepts to others.', 
                examples: ['Include key details that support the main idea', 'Use your own words rather than copying', 'Omit less important information', 'Keep summaries shorter than the original', 'Maintain the essential meaning while condensing'], 
                grade: 6 
            },
            { 
                id: 'reading_6_6', 
                title: 'Poetry Basics', 
                content: 'Poetry is a form of literature that uses language in creative and expressive ways. Unlike prose, poetry often uses line breaks, rhythm, and sound patterns to create meaning and emotion. Rhyme is the repetition of similar sounds, typically at the end of lines (end rhyme) or within lines (internal rhyme). Rhythm is the pattern of stressed and unstressed syllables, creating a musical quality. Meter is the regular rhythm pattern, like iambic pentameter (five pairs of unstressed-stressed syllables). Literary devices enhance meaning: similes compare using "like" or "as" ("as brave as a lion"), metaphors make direct comparisons ("time is a thief"), personification gives human traits to non-human things ("the wind whispered"), and alliteration repeats consonant sounds ("silly snakes slither"). Imagery uses descriptive language to appeal to the senses, creating vivid mental pictures. Understanding these elements helps us appreciate poetry\'s beauty, analyze its meaning, and understand how poets use language creatively to express ideas and emotions.', 
                examples: ['Rhyme and rhythm create musical patterns in poetry', 'Metaphors and similes create vivid comparisons', 'Imagery appeals to our senses with descriptive language', 'Personification gives life to non-living things', 'Alliteration creates sound patterns with repeated consonants'], 
                grade: 6 
            }
        ],
        9: [
            { 
                id: 'reading_9_1', 
                title: 'Literary Analysis', 
                content: 'Literary analysis involves examining literature to understand deeper meanings, techniques, and themes. Themes are universal ideas or messages that recur throughout a work - common themes include love, loss, coming of age, good vs. evil, and the human condition. Symbols are objects, characters, or events that represent larger ideas beyond their literal meaning. For example, a dove might symbolize peace, or darkness might symbolize evil. Literary devices enhance meaning: foreshadowing hints at future events, irony creates contrast between expectation and reality, and allegory uses characters and events to represent abstract ideas. Analyzing point of view (first person, third person limited, omniscient) reveals how perspective shapes the narrative. Understanding these elements helps us appreciate how authors craft meaning, why certain choices are made, and how literature reflects and comments on human experience. Strong analysis requires close reading, identifying patterns, and supporting interpretations with textual evidence.', 
                examples: ['Identify themes across different texts and genres', 'Analyze symbolism to find deeper meanings', 'Examine how literary devices enhance the story', 'Consider how point of view affects the narrative', 'Support analysis with evidence from the text'], 
                grade: 9 
            },
            { 
                id: 'reading_9_2', 
                title: 'Character Development', 
                content: 'Character development refers to how characters change, grow, or remain static throughout a story. Dynamic characters undergo significant internal changes, while static characters remain essentially the same. Character arcs show the journey from initial state through challenges to final state. Motivation drives characters\' actions - understanding why characters do what they do helps us understand the story. Internal conflict occurs within a character (struggles with decisions, emotions, values), while external conflict pits characters against outside forces. Character traits are revealed through direct description, dialogue, actions, thoughts, and how others react to them. Round characters are complex and multi-dimensional, while flat characters are simple and one-dimensional. Foil characters contrast with main characters to highlight specific traits. Analyzing character development helps us understand themes, appreciate storytelling craft, and see how characters\' journeys reflect real human experiences and growth.', 
                examples: ['Character arcs show how characters change throughout the story', 'Motivation and conflict drive character actions', 'Characters can be dynamic (changing) or static (unchanging)', 'Character traits are revealed through actions and dialogue', 'Foil characters highlight traits through contrast'], 
                grade: 9 
            },
            { 
                id: 'reading_9_3', 
                title: 'Critical Reading', 
                content: 'Critical reading goes beyond basic comprehension to evaluate, analyze, and question texts. It involves identifying the author\'s purpose (to inform, persuade, entertain, or express), recognizing bias and perspective, and evaluating the strength of arguments and evidence. Look for logical fallacies - errors in reasoning like ad hominem attacks, false cause, or hasty generalizations. Consider the author\'s credibility, the quality of evidence presented, and whether conclusions logically follow from premises. Distinguish between facts (verifiable statements) and opinions (personal judgments). Recognize persuasive techniques like emotional appeals, loaded language, and rhetorical questions. Critical reading also involves questioning assumptions, considering alternative viewpoints, and recognizing how context (historical, cultural, social) influences meaning. This skill is essential for academic success, informed citizenship, and navigating the information-rich world we live in. Practice by reading diverse perspectives on the same topic and comparing arguments.', 
                examples: ['Identify bias and perspective in texts', 'Evaluate arguments and evidence for strength', 'Recognize logical fallacies and weak reasoning', 'Distinguish between facts and opinions', 'Question assumptions and consider alternative viewpoints'], 
                grade: 9 
            },
            { 
                id: 'reading_9_4', 
                title: 'Shakespeare and Classic Literature', 
                content: 'William Shakespeare, writing in the late 16th and early 17th centuries, is considered one of the greatest writers in the English language. His works explore universal themes that remain relevant today: love, jealousy, ambition, power, and human nature. Understanding Shakespeare requires knowledge of his language (Early Modern English), which differs from contemporary English. Iambic pentameter, the rhythm pattern of five pairs of unstressed-stressed syllables ("da-DUM da-DUM da-DUM da-DUM da-DUM"), is common in his verse. His plays use blank verse (unrhymed iambic pentameter), prose, and rhyme for different effects. Romeo and Juliet explores themes of love, fate, and family conflict. Hamlet examines revenge, madness, and moral uncertainty. Macbeth explores ambition and its corrupting influence. Shakespeare\'s characters are complex, his plots intricate, and his language rich with imagery, wordplay, and metaphor. Studying classic literature helps us understand literary traditions, cultural values of different eras, and how great writers have explored timeless human concerns.', 
                examples: ['Understanding iambic pentameter helps read Shakespeare\'s verse', 'Themes in Romeo and Juliet include love, fate, and family conflict', 'Shakespeare uses blank verse, prose, and rhyme strategically', 'His language includes rich imagery, metaphors, and wordplay', 'Classic literature explores universal themes that remain relevant'], 
                grade: 9 
            },
            { 
                id: 'reading_9_5', 
                title: 'Essay Writing', 
                content: 'Effective essay writing requires clear structure, strong arguments, and polished prose. Analytical essays examine and interpret texts, breaking down elements to understand how they work together. Argumentative essays present a claim and support it with evidence and reasoning. Both types need a strong thesis statement - a clear, specific claim that the essay will prove or explore. The introduction should hook the reader, provide context, and present the thesis. Body paragraphs each focus on one main point, starting with topic sentences that connect to the thesis. Each paragraph should include evidence (quotes, examples, data) and analysis explaining how the evidence supports the point. Use transitions to connect ideas smoothly. The conclusion should restate the thesis in new words, summarize main points, and leave the reader with something to think about. Strong writing uses varied sentence structure, precise vocabulary, and active voice. Revise for clarity, coherence, and correctness. Practice writing regularly to develop your voice and improve your ability to communicate complex ideas clearly.', 
                examples: ['Thesis statements clearly state your main argument', 'Supporting evidence from texts strengthens your points', 'Topic sentences guide each paragraph\'s focus', 'Transitions connect ideas smoothly between paragraphs', 'Conclusions reinforce your argument and provide closure'], 
                grade: 9 
            },
            { 
                id: 'reading_9_6', 
                title: 'Research Skills', 
                content: 'Research skills are essential for academic success and informed decision-making. The research process begins with formulating a research question - a focused, answerable question that guides your investigation. Finding reliable sources requires evaluating credibility: consider the author\'s expertise, the publication\'s reputation, the date of publication, and whether the source is peer-reviewed. Primary sources are original materials (documents, interviews, experiments), while secondary sources interpret or analyze primary sources. Use library databases, academic journals, and reputable websites. Avoid unreliable sources like personal blogs without credentials or sites with clear bias. Taking effective notes helps organize information - use methods like outlining, mind mapping, or note cards. Proper citation is crucial to avoid plagiarism and give credit to original authors. MLA (Modern Language Association) and APA (American Psychological Association) are common citation styles, each with specific formatting rules for in-text citations and works cited pages. Understanding research ethics, including avoiding plagiarism and representing sources accurately, is fundamental to academic integrity.', 
                examples: ['Finding reliable sources requires evaluating credibility and expertise', 'MLA and APA formats have specific citation rules', 'Primary sources are original materials, secondary sources interpret them', 'Take organized notes to track information and sources', 'Always cite sources to avoid plagiarism and give credit'], 
                grade: 9 
            }
        ],
        12: [
            { 
                id: 'reading_12_1', 
                title: 'Advanced Literary Theory', 
                content: 'Literary theory provides frameworks for interpreting and analyzing literature from different perspectives. Feminist criticism examines how literature represents gender, challenges patriarchal assumptions, and explores women\'s experiences and voices. Post-colonial theory analyzes works from formerly colonized regions, examining power dynamics, cultural identity, and resistance to colonial narratives. Marxist criticism focuses on class struggles, economic systems, and how literature reflects or challenges social structures. Psychoanalytic theory applies Freudian and Jungian concepts to analyze characters\' motivations, symbolism, and unconscious desires. Structuralism examines underlying structures and patterns, while post-structuralism questions fixed meanings and emphasizes ambiguity. Reader-response theory focuses on how readers create meaning through their experiences and interpretations. New Historicism considers literature within its historical and cultural context. Each theoretical approach offers unique insights, and sophisticated analysis often combines multiple perspectives. Understanding literary theory enhances critical thinking, reveals hidden meanings, and connects literature to broader social, political, and philosophical questions.', 
                examples: ['Feminist criticism examines gender representation and women\'s voices', 'Post-colonial theory analyzes power dynamics and cultural identity', 'Multiple theoretical approaches can be combined for deeper analysis', 'Theory connects literature to social, political, and philosophical questions', 'Different theories reveal different aspects of literary works'], 
                grade: 12 
            },
            { 
                id: 'reading_12_2', 
                title: 'Rhetorical Analysis', 
                content: 'Rhetorical analysis examines how authors use language and techniques to persuade, inform, or influence audiences. Aristotle identified three appeals: ethos (credibility and character of the speaker), pathos (emotional appeals to the audience), and logos (logical reasoning and evidence). Effective arguments often combine all three. Rhetorical devices enhance persuasion: repetition emphasizes key points, parallelism creates rhythm and balance, rhetorical questions engage readers, analogies clarify complex ideas, and hyperbole creates emphasis. Tone (author\'s attitude) and diction (word choice) shape how messages are received. Understanding audience is crucial - effective rhetoric adapts to the intended readers\' values, knowledge, and concerns. Context matters: historical, social, and cultural circumstances influence how messages are created and received. Analyzing rhetoric helps us understand how persuasion works, evaluate arguments critically, recognize manipulation techniques, and become more effective communicators ourselves. This skill is essential for understanding political speeches, advertisements, editorials, and any persuasive communication.', 
                examples: ['Ethos, pathos, logos are three main persuasive appeals', 'Rhetorical devices enhance persuasion and emphasis', 'Tone and diction shape how messages are received', 'Effective rhetoric adapts to the intended audience', 'Context influences how messages are created and interpreted'], 
                grade: 12 
            },
            { 
                id: 'reading_12_3', 
                title: 'Modern Literature', 
                content: 'Modern and contemporary literature reflects the complexities of the 20th and 21st centuries. Modernism (early 20th century) broke from traditional forms, experimenting with stream of consciousness, fragmented narratives, and interior monologue. Authors like James Joyce, Virginia Woolf, and T.S. Eliot explored psychological depth and questioned traditional values. Postmodernism (mid-late 20th century) further challenged conventions, playing with narrative structure, blurring fiction and reality, and questioning the nature of truth and meaning. Contemporary literature (late 20th century to present) addresses current issues: globalization, technology, identity, climate change, and social justice. Diverse voices from previously marginalized groups have gained prominence, enriching literary perspectives. Themes include alienation, search for identity, impact of technology, environmental concerns, and social inequality. Understanding modern literature helps us comprehend our contemporary world, see how literature responds to historical events, and appreciate experimental techniques that push artistic boundaries. These works often require active reading and interpretation, engaging readers as co-creators of meaning.', 
                examples: ['Postmodernism challenges traditional narrative structures', 'Contemporary themes address current social and environmental issues', 'Modern literature experiments with form and technique', 'Diverse voices enrich contemporary literary perspectives', 'Active reading is required to interpret complex modern works'], 
                grade: 12 
            },
            { 
                id: 'reading_12_4', 
                title: 'Advanced Writing', 
                content: 'Advanced writing requires sophisticated techniques to communicate complex ideas effectively. Syntax variation creates rhythm and emphasis: short sentences for impact, long sentences for elaboration, parallel structures for balance. Precise diction chooses words that convey exact meaning and appropriate tone. Active voice generally creates stronger, clearer prose than passive voice. Figurative language (metaphors, similes, personification) creates vivid imagery and deeper meaning. Transitions smoothly connect ideas within and between paragraphs. Complex arguments require logical structure: clear claims, strong evidence, thorough analysis, acknowledgment of counterarguments, and compelling conclusions. Academic writing demands formal tone, objective perspective, and rigorous evidence. Creative writing allows more flexibility but still requires craft and purpose. Revision is essential - strong writing emerges through multiple drafts, focusing on clarity, coherence, and impact. Understanding your audience and purpose guides all writing decisions. Advanced writers develop a distinctive voice while adapting style to context. Mastery comes through extensive reading, regular practice, and thoughtful revision.', 
                examples: ['Sophisticated syntax creates rhythm and emphasis', 'Complex arguments require logical structure and evidence', 'Precise diction conveys exact meaning and tone', 'Figurative language creates vivid imagery and deeper meaning', 'Revision transforms good writing into excellent writing'], 
                grade: 12 
            },
            { 
                id: 'reading_12_5', 
                title: 'Comparative Literature', 
                content: 'Comparative literature examines works across different cultures, languages, time periods, and genres to find connections, contrasts, and universal themes. Cross-cultural analysis reveals how different societies address similar human concerns: love, loss, power, identity, and the human condition. Comparing works from different time periods shows how themes evolve or persist across eras. Intertextuality explores how texts reference, respond to, or transform earlier works - understanding these connections enriches interpretation. Comparative analysis might examine how different authors treat similar themes, how genres develop across cultures, or how translations affect meaning. This approach requires understanding multiple literary traditions, cultural contexts, and historical backgrounds. It reveals both universal human experiences and culturally specific perspectives. Comparative literature challenges readers to think beyond single texts, seeing literature as an ongoing conversation across time and space. This field promotes cultural understanding, reveals literary influences, and helps us appreciate both similarities and differences in how humans express themselves through literature.', 
                examples: ['Cross-cultural analysis reveals universal and culturally specific themes', 'Intertextuality shows how texts reference and respond to other works', 'Comparing works across time periods reveals evolving or persistent themes', 'Understanding multiple literary traditions enriches interpretation', 'Comparative literature promotes cultural understanding'], 
                grade: 12 
            },
            { 
                id: 'reading_12_6', 
                title: 'Research Paper Writing', 
                content: 'Research paper writing requires systematic investigation, critical analysis, and clear communication of findings. The process begins with a focused research question that guides investigation. A literature review surveys existing scholarship, identifying gaps, debates, and key contributions to the field. Research methodology must be appropriate: qualitative research explores meanings and experiences, quantitative research analyzes numerical data, and mixed methods combine approaches. Primary sources provide direct evidence, while secondary sources offer analysis and interpretation. Effective research requires evaluating source credibility, relevance, and bias. Organizing research involves outlining main arguments, supporting evidence, and logical flow. The paper structure typically includes: introduction (context, research question, thesis), literature review, methodology, analysis/discussion, and conclusion. Proper citation (MLA, APA, Chicago) gives credit and allows readers to verify sources. Avoiding plagiarism requires careful paraphrasing, quotation, and citation. Strong research papers contribute new insights, synthesize existing knowledge, or apply theories to new contexts. The writing must be clear, precise, and accessible to the intended academic audience. Revision ensures accuracy, clarity, and coherence throughout.', 
                examples: ['Literature review surveys existing scholarship and identifies gaps', 'Primary and secondary sources provide different types of evidence', 'Research methodology must be appropriate for the research question', 'Proper citation gives credit and allows verification', 'Strong research papers contribute new insights or synthesize knowledge'], 
                grade: 12 
            }
        ]
    },
    language: {
        6: [
            { 
                id: 'language_6_1', 
                title: 'Basic Greetings', 
                content: 'Greetings are fundamental to communication in any language and help establish connections with others. In Spanish, greetings vary by time of day and formality. "Hola" is the universal greeting meaning "Hello" and can be used at any time. "Buenos días" (Good morning) is used until around noon, "Buenas tardes" (Good afternoon) from noon until evening, and "Buenas noches" (Good evening/Good night) in the evening or at night. When meeting someone, you might say "Mucho gusto" (Nice to meet you) or "Encantado/Encantada" (Pleased to meet you). To ask how someone is, use "¿Cómo estás?" (informal) or "¿Cómo está usted?" (formal). Common responses include "Bien" (Good), "Muy bien" (Very good), or "Más o menos" (So-so). Saying goodbye includes "Adiós" (Goodbye), "Hasta luego" (See you later), or "Hasta mañana" (See you tomorrow). Understanding these basic greetings helps you navigate social interactions and shows respect for Spanish-speaking cultures. Practice pronunciation and use appropriate greetings based on context and relationship.', 
                examples: ['Hola = Hello (universal greeting)', 'Buenos días = Good morning (until noon)', 'Buenas tardes = Good afternoon (noon to evening)', '¿Cómo estás? = How are you? (informal)', 'Mucho gusto = Nice to meet you'], 
                grade: 6 
            },
            { 
                id: 'language_6_2', 
                title: 'Numbers 1-100', 
                content: 'Mastering numbers is essential for everyday communication in Spanish. Numbers 1-15 are unique and must be memorized: uno (1), dos (2), tres (3), cuatro (4), cinco (5), seis (6), siete (7), ocho (8), nueve (9), diez (10), once (11), doce (12), trece (13), catorce (14), quince (15). Numbers 16-19 follow a pattern: dieciséis (16), diecisiete (17), dieciocho (18), diecinueve (19). The tens are: veinte (20), treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90), cien (100). To form numbers 21-29, combine "veinti" with the ones digit: veintiuno (21), veintidós (22). For 31-99, use the tens number, "y" (and), and the ones digit: treinta y uno (31), cuarenta y cinco (45). Note that "uno" becomes "un" before masculine nouns. Numbers are used for telling time, giving ages, counting, giving phone numbers, and expressing quantities. Practice counting regularly to build fluency with numbers.', 
                examples: ['Uno, dos, tres = 1, 2, 3', 'Cien = 100', 'Veinte = 20, treinta = 30, cuarenta = 40', 'Veintiuno = 21 (combines veinte + uno)', 'Treinta y cinco = 35 (thirty and five)'], 
                grade: 6 
            },
            { 
                id: 'language_6_3', 
                title: 'Colors and Shapes', 
                content: 'Learning colors and shapes builds essential vocabulary for describing the world around you. Common colors in Spanish include: rojo (red), azul (blue), verde (green), amarillo (yellow), naranja/anaranjado (orange), morado/púrpura (purple), rosa/rosado (pink), negro (black), blanco (white), gris (gray), marrón/café (brown). Colors are adjectives and must agree with the noun in gender and number: "coche rojo" (red car, masculine), "casa roja" (red house, feminine). Shapes vocabulary includes: círculo (circle), cuadrado (square), rectángulo (rectangle), triángulo (triangle), estrella (star), corazón (heart), óvalo (oval), rombo (diamond/rhombus). These words help you describe objects, express preferences, follow directions, and engage in creative activities. Practice by describing objects around you: "El libro es azul" (The book is blue) or "La mesa es cuadrada" (The table is square). Combining colors and shapes expands your descriptive vocabulary significantly.', 
                examples: ['Rojo = Red, Azul = Blue, Verde = Green', 'Círculo = Circle, Cuadrado = Square', 'Colors must agree with nouns: coche rojo, casa roja', 'Triángulo = Triangle, Rectángulo = Rectangle', 'Use colors and shapes to describe objects around you'], 
                grade: 6 
            },
            { 
                id: 'language_6_4', 
                title: 'Family Members', 
                content: 'Family vocabulary is essential for talking about relationships and personal life. Immediate family includes: padre/papá (father/dad), madre/mamá (mother/mom), hermano (brother), hermana (sister), hijo (son), hija (daughter). Extended family includes: abuelo (grandfather), abuela (grandmother), tío (uncle), tía (aunt), primo (male cousin), prima (female cousin), sobrino (nephew), sobrina (niece). Note that Spanish distinguishes gender: hermano (brother) vs. hermana (sister). To say "my family," use "mi familia." To describe relationships: "Mi padre se llama..." (My father is named...), "Tengo dos hermanos" (I have two brothers). Possessive adjectives agree with the noun: "mi hermano" (my brother), "mis hermanos" (my brothers). Family is central to many Spanish-speaking cultures, so this vocabulary appears frequently in conversations. Practice by describing your own family or creating family trees. Understanding family terms helps you discuss personal topics and understand cultural values around family relationships.', 
                examples: ['Madre = Mother, Padre = Father', 'Hermano = Brother, Hermana = Sister', 'Abuelo = Grandfather, Abuela = Grandmother', 'Tío = Uncle, Tía = Aunt', 'Use "mi familia" to say "my family"'], 
                grade: 6 
            },
            { 
                id: 'language_6_5', 
                title: 'Common Verbs', 
                content: 'Verbs are action words that express what someone or something does. In Spanish, verbs change form (conjugate) based on the subject. Common regular verbs include: caminar (to walk), comer (to eat), beber (to drink), estudiar (to study), trabajar (to work), vivir (to live), hablar (to speak), escuchar (to listen), mirar (to look/watch), leer (to read), escribir (to write), jugar (to play). Spanish verbs are categorized by their infinitive endings: -ar verbs (caminar, hablar), -er verbs (comer, beber), and -ir verbs (vivir, escribir). Each category follows specific conjugation patterns. For example, with "hablar" (to speak): yo hablo (I speak), tú hablas (you speak), él/ella habla (he/she speaks), nosotros hablamos (we speak), vosotros habláis (you all speak), ellos/ellas hablan (they speak). Learning common verbs expands your ability to express actions and describe daily activities. Practice conjugating verbs and using them in sentences to build fluency.', 
                examples: ['Caminar = To walk, Comer = To eat', 'Estudiar = To study, Trabajar = To work', 'Verbs conjugate based on subject (yo, tú, él, etc.)', 'Regular verbs follow patterns: -ar, -er, -ir endings', 'Practice using verbs in sentences to build fluency'], 
                grade: 6 
            },
            { 
                id: 'language_6_6', 
                title: 'Days and Months', 
                content: 'Knowing days of the week and months is essential for scheduling, making plans, and discussing time. Days of the week in Spanish are: lunes (Monday), martes (Tuesday), miércoles (Wednesday), jueves (Thursday), viernes (Friday), sábado (Saturday), domingo (Sunday). Note that days are not capitalized in Spanish (unlike English). To say "on Monday," use "el lunes" (the Monday). Months are: enero (January), febrero (February), marzo (March), abril (April), mayo (May), junio (June), julio (July), agosto (August), septiembre (September), octubre (October), noviembre (November), diciembre (December). Like days, months are not capitalized. To express dates: "Hoy es lunes" (Today is Monday), "Es el 15 de enero" (It\'s January 15th). Seasons are: primavera (spring), verano (summer), otoño (autumn/fall), invierno (winter). This vocabulary helps you talk about schedules, birthdays, holidays, and plan activities. Practice by saying today\'s date, your birthday, and upcoming events in Spanish.', 
                examples: ['Lunes = Monday, Martes = Tuesday, Miércoles = Wednesday', 'Enero = January, Febrero = February, Marzo = March', 'Days and months are not capitalized in Spanish', 'Use "el" with days: el lunes (on Monday)', 'Express dates: "Es el 15 de enero" (It\'s January 15th)'], 
                grade: 6 
            }
        ],
        9: [
            { 
                id: 'language_9_1', 
                title: 'Present Tense Verbs', 
                content: 'The present tense describes current actions, habitual actions, and general truths. Regular verbs follow predictable patterns based on their infinitive endings. For -ar verbs like "hablar" (to speak): yo hablo, tú hablas, él/ella/usted habla, nosotros hablamos, vosotros habláis, ellos/ellas/ustedes hablan. For -er verbs like "comer" (to eat): yo como, tú comes, él/ella/usted come, nosotros comemos, vosotros coméis, ellos/ellas/ustedes comen. For -ir verbs like "vivir" (to live): yo vivo, tú vives, él/ella/usted vive, nosotros vivimos, vosotros vivís, ellos/ellas/ustedes viven. However, many common verbs are irregular. "Ser" (to be - permanent) and "estar" (to be - temporary/location) are both irregular and have different uses: "ser" for identity, characteristics, time, and origin; "estar" for location, temporary conditions, and present progressive. Other important irregular verbs include "tener" (to have), "ir" (to go), "hacer" (to do/make), and stem-changing verbs. Mastering present tense is fundamental for basic communication in Spanish.', 
                examples: ['Yo hablo, tú hablas = I speak, you speak', 'Ser vs Estar: both mean "to be" but have different uses', 'Regular verbs follow -ar, -er, -ir patterns', 'Irregular verbs like "tener" and "ir" must be memorized', 'Stem-changing verbs change vowels in the stem'], 
                grade: 9 
            },
            { 
                id: 'language_9_2', 
                title: 'Past Tense', 
                content: 'Spanish has two main past tenses with different uses. The preterite (pretérito) describes completed actions in the past with a specific time frame or definite beginning/end. It\'s used for single events, actions that happened a specific number of times, or actions that interrupted another. Examples: "Ayer comí pizza" (Yesterday I ate pizza), "Ella llegó a las tres" (She arrived at three). The imperfect (imperfecto) describes ongoing, habitual, or background actions in the past. It sets the scene, describes what was happening, or tells what used to happen regularly. Examples: "Cuando era niño, jugaba fútbol" (When I was a child, I used to play soccer), "Ella estudiaba cuando llegué" (She was studying when I arrived). Key words help: preterite uses "ayer" (yesterday), "anoche" (last night), specific times; imperfect uses "siempre" (always), "a menudo" (often), "mientras" (while). Often both tenses appear together: imperfect sets the scene, preterite describes what happened. Understanding when to use each tense is crucial for accurate past-tense communication.', 
                examples: ['Comí = I ate (preterite - completed action)', 'Era = I was (imperfect - ongoing/habitual)', 'Preterite: specific completed actions', 'Imperfect: ongoing actions, habits, background', 'Both tenses often appear together in narratives'], 
                grade: 9 
            },
            { 
                id: 'language_9_3', 
                title: 'Future Tense', 
                content: 'Expressing the future in Spanish can be done in two main ways. The informal future uses "ir + a + infinitive" (going to do something), which is very common in spoken Spanish. Examples: "Voy a estudiar" (I am going to study), "Van a viajar" (They are going to travel). This construction is straightforward and works with any verb. The future tense (futuro) uses specific endings added to the infinitive: -é, -ás, -á, -emos, -éis, -án. For "hablar": hablaré (I will speak), hablarás (you will speak), hablará (he/she will speak), hablaremos (we will speak), hablaréis (you all will speak), hablarán (they will speak). Some verbs are irregular in the future: "tener" becomes "tendré," "hacer" becomes "haré," "decir" becomes "diré." The future tense can also express probability in the present: "¿Dónde estará Juan?" (Where could Juan be?). Both forms are correct, but "ir + a" is more common in everyday speech, while the future tense is more formal and appears in writing. Practice both to become comfortable with future expressions.', 
                examples: ['Voy a estudiar = I am going to study (informal future)', 'Estudiaré = I will study (future tense)', 'Ir + a + infinitive is common in spoken Spanish', 'Future tense endings: -é, -ás, -á, -emos, -éis, -án', 'Future can express probability: "Será las tres" (It\'s probably three)'], 
                grade: 9 
            },
            { 
                id: 'language_9_4', 
                title: 'Subjunctive Mood', 
                content: 'The subjunctive mood expresses doubt, uncertainty, wishes, emotions, and hypothetical situations. Unlike the indicative mood (which states facts), the subjunctive expresses subjectivity. It\'s triggered by certain expressions and sentence structures. Common triggers include expressions of emotion ("Me alegra que..." - I\'m happy that...), doubt ("Dudo que..." - I doubt that...), wishes ("Espero que..." - I hope that...), and impersonal expressions ("Es importante que..." - It\'s important that...). The subjunctive has its own conjugation patterns. For regular -ar verbs, use -e endings: "hable" (that he/she speak). For -er/-ir verbs, use -a endings: "coma" (that he/she eat), "viva" (that he/she live). Many verbs are irregular in subjunctive, like "ser" (sea, seas, sea), "estar" (esté, estés, esté), and "ir" (vaya, vayas, vaya). The subjunctive appears in dependent clauses after "que" (that) when the main clause expresses emotion, doubt, or influence. Understanding subjunctive is advanced but essential for expressing nuanced thoughts and feelings in Spanish.', 
                examples: ['Espero que vengas = I hope that you come (subjunctive)', 'Dudo que sea verdad = I doubt that it\'s true (subjunctive)', 'Subjunctive expresses doubt, wishes, emotions', 'Triggered by expressions like "Espero que," "Dudo que"', 'Has different endings than indicative mood'], 
                grade: 9 
            },
            { 
                id: 'language_9_5', 
                title: 'Complex Sentences', 
                content: 'Complex sentences combine multiple ideas using conjunctions and subordinate clauses, allowing for sophisticated expression. Common conjunctions include "aunque" (although), "cuando" (when), "porque" (because), "si" (if), "mientras" (while), "después de que" (after), and "antes de que" (before). Subordinate clauses depend on the main clause for meaning. For example: "Aunque llueva, iré" (Although it rains, I will go) - the main clause is "iré," and "aunque llueva" is the subordinate clause. Time clauses with "cuando" (when) often require subjunctive if referring to future: "Cuando llegues, avísame" (When you arrive, let me know). Cause and effect: "No fui porque estaba enfermo" (I didn\'t go because I was sick). Conditional sentences: "Si estudias, aprobarás" (If you study, you will pass). Relative clauses use "que" (that/which/who), "quien" (who), "donde" (where): "El libro que leí" (The book that I read). Building complex sentences allows you to express relationships between ideas, show cause and effect, and create more nuanced, natural-sounding Spanish.', 
                examples: ['Aunque llueva, iré = Although it rains, I will go', 'Cuando llegues, avísame = When you arrive, let me know', 'Use conjunctions to connect ideas: aunque, porque, si', 'Subordinate clauses depend on main clauses', 'Complex sentences show relationships between ideas'], 
                grade: 9 
            },
            { 
                id: 'language_9_6', 
                title: 'Conversational Skills', 
                content: 'Conversational skills involve practical language use in real-world situations. Ordering food requires vocabulary like "la carta" (menu), "quiero" (I want), "para mí" (for me), "la cuenta" (the bill), and polite expressions: "Por favor" (please), "Gracias" (thank you). Asking for directions uses: "¿Dónde está...?" (Where is...?), "¿Cómo llego a...?" (How do I get to...?), "a la derecha" (to the right), "a la izquierda" (to the left), "recto" (straight ahead). Shopping conversations include: "¿Cuánto cuesta?" (How much does it cost?), "¿Tiene...?" (Do you have...?), sizes and colors. Making small talk involves asking about family, work, hobbies, and expressing opinions. Handling misunderstandings: "No entiendo" (I don\'t understand), "¿Puede repetir?" (Can you repeat?), "Hablo un poco de español" (I speak a little Spanish). Cultural awareness is important - understanding when to use formal vs. informal address, appropriate topics, and cultural norms. Practice through role-playing scenarios to build confidence in real conversations.', 
                examples: ['Ordering food: "Quiero..." (I want...), "La cuenta, por favor"', 'Asking for directions: "¿Dónde está...?" (Where is...?)', 'Shopping: "¿Cuánto cuesta?" (How much does it cost?)', 'Handling misunderstandings: "No entiendo" (I don\'t understand)', 'Use appropriate formal/informal address based on context'], 
                grade: 9 
            }
        ],
        12: [
            { 
                id: 'language_12_1', 
                title: 'Advanced Grammar', 
                content: 'Advanced grammar mastery enables sophisticated expression in Spanish. Conditional sentences express hypothetical situations: "Si tuviera tiempo, viajaría" (If I had time, I would travel). The conditional tense (would do) uses endings: -ía, -ías, -ía, -íamos, -íais, -ían. Passive voice shifts focus from the doer to the receiver: "El libro fue escrito por el autor" (The book was written by the author). The passive is formed with "ser" + past participle. Complex sentence structures include relative clauses with "que," "quien," "cual," and "donde." Subjunctive appears in various contexts beyond basic triggers: after "aunque" (although), in conditional sentences, and with expressions of emotion, doubt, or influence. Advanced verb forms include the perfect tenses (present perfect, pluperfect, future perfect) and the conditional perfect. Understanding register (formal vs. informal) and regional variations is important. Advanced grammar allows precise expression of complex thoughts, nuanced meanings, and sophisticated communication appropriate for academic, professional, and literary contexts.', 
                examples: ['Conditional sentences express hypothetical situations', 'Passive voice shifts focus from doer to receiver', 'Complex sentence structures use relative clauses', 'Subjunctive appears in various advanced contexts', 'Perfect tenses express completed actions relative to other times'], 
                grade: 12 
            },
            { 
                id: 'language_12_2', 
                title: 'Literary Analysis in Spanish', 
                content: 'Analyzing Spanish literature and poetry requires understanding both language and literary techniques. Spanish poetry has rich traditions: the Golden Age (Siglo de Oro) with poets like Garcilaso de la Vega, Romanticism with Gustavo Adolfo Bécquer, and modern poets like Federico García Lorca and Pablo Neruda. Literary analysis examines themes (temas), symbols (símbolos), imagery (imágenes), and poetic devices (recursos literarios). Common themes in Spanish literature include honor, love, death, social criticism, and identity. Understanding cultural and historical context is crucial - works reflect their times and societies. Analyzing poetry requires attention to meter, rhyme schemes, and rhythm patterns specific to Spanish verse. Prose analysis examines narrative techniques, character development, and social commentary. Reading literature in Spanish improves language skills while providing cultural insights. It requires advanced vocabulary, understanding of literary Spanish (which may differ from conversational), and appreciation of cultural nuances. This study connects language learning with cultural understanding and literary appreciation.', 
                examples: ['Poetry analysis requires understanding meter, rhyme, and rhythm', 'Literary themes reflect cultural values and historical contexts', 'Spanish literature includes diverse traditions and movements', 'Cultural context is essential for understanding literary works', 'Reading literature improves language skills and cultural understanding'], 
                grade: 12 
            },
            { 
                id: 'language_12_3', 
                title: 'Formal Writing', 
                content: 'Formal writing in Spanish requires specific conventions, vocabulary, and structures appropriate for academic and professional contexts. Business letters follow formal formats with proper greetings ("Estimado/a" for Dear), formal closings ("Atentamente" for Sincerely), and structured content. Academic essays require formal register, objective tone, and logical organization with clear thesis statements (tesis), supporting arguments (argumentos), and conclusions (conclusiones). Formal writing uses more complex sentence structures, sophisticated vocabulary, and avoids contractions and colloquialisms. It requires proper use of subjunctive in formal expressions, conditional for polite requests, and precise terminology. Citations and references follow specific formats. Formal emails maintain professional tone while being concise. Reports (informes) require clear structure: introduction, methodology, findings, and conclusions. Understanding formal writing conventions is essential for academic success, professional communication, and participating in formal discourse in Spanish-speaking contexts. Practice with different formal genres builds versatility and confidence.', 
                examples: ['Business letters require formal greetings and closings', 'Academic essays need clear thesis statements and logical organization', 'Formal writing uses sophisticated vocabulary and complex structures', 'Proper citations and references are essential', 'Reports require structured presentation of information'], 
                grade: 12 
            },
            { 
                id: 'language_12_4', 
                title: 'Cultural Studies', 
                content: 'Cultural studies explore the rich diversity of Spanish-speaking cultures, their histories, traditions, and contemporary issues. Spanish-speaking countries span multiple continents with distinct cultural identities: Spain\'s European heritage, Mexico\'s indigenous and colonial influences, Argentina\'s European immigration patterns, and the Caribbean\'s African and indigenous roots. Cultural practices vary: festivals (Día de los Muertos, Las Fallas, Carnival), traditions (quinceañeras, siestas, family structures), and social customs (greeting with kisses, meal times, social hierarchies). Historical context shapes cultures: colonial history, independence movements, and modern political developments. Contemporary issues include migration, globalization\'s impact, indigenous rights, and cultural preservation. Understanding cultural context enhances language learning - language and culture are inseparable. Cultural awareness prevents misunderstandings, shows respect, and enables meaningful communication. Studying culture through literature, film, music, and current events provides authentic language exposure while building cultural competence. This knowledge is essential for effective communication and appreciation of Spanish-speaking world\'s diversity.', 
                examples: ['Cultural practices vary across Spanish-speaking countries', 'Historical context shapes contemporary cultures', 'Understanding culture enhances language learning and communication', 'Cultural awareness prevents misunderstandings and shows respect', 'Diverse cultural perspectives enrich understanding of the Spanish-speaking world'], 
                grade: 12 
            },
            { 
                id: 'language_12_5', 
                title: 'Advanced Conversation', 
                content: 'Advanced conversation involves sophisticated discussions on complex topics requiring nuanced expression, cultural awareness, and fluent language use. Engaging in debates requires presenting arguments, countering points, and using persuasive language. Academic discussions involve analyzing ideas, comparing perspectives, and contributing to intellectual discourse. Topics might include politics, social issues, literature, science, philosophy, or current events. Advanced conversation demands: extensive vocabulary for precise expression, understanding of formal and informal registers, ability to express abstract concepts, cultural sensitivity, and active listening skills. It requires managing turn-taking, handling interruptions politely, and building on others\' contributions. Expressing opinions requires phrases like "En mi opinión" (In my opinion), "Desde mi punto de vista" (From my point of view), and "Me parece que" (It seems to me that). Agreeing, disagreeing, and qualifying statements require sophisticated language. Advanced conversation also involves understanding humor, irony, and cultural references. Practice through discussion groups, debates, and academic conversations builds confidence and fluency for sophisticated communication in professional and academic settings.', 
                examples: ['Debates require presenting arguments and countering points', 'Academic discussions involve analyzing and comparing ideas', 'Express opinions using sophisticated phrases and structures', 'Cultural sensitivity is essential for advanced conversations', 'Practice builds confidence for professional and academic communication'], 
                grade: 12 
            },
            { 
                id: 'language_12_6', 
                title: 'Translation Skills', 
                content: 'Translation involves more than word-for-word conversion - it requires understanding meaning, context, and cultural nuances. Literal translation often fails because languages structure ideas differently and have unique cultural concepts. Idiomatic expressions rarely translate directly: "Estar en las nubes" (to be in the clouds) means "to be daydreaming," not a literal cloud reference. Cultural adaptation is crucial: concepts, references, and humor may need explanation or adaptation for the target audience. Translation requires understanding both source and target languages deeply, including grammar, vocabulary, register, and cultural context. Different translation approaches: word-for-word (literal), sense-for-sense (meaning-focused), and free translation (adaptation). Professional translation considers purpose: literary translation preserves style and voice, technical translation prioritizes accuracy, and commercial translation focuses on effectiveness. Challenges include: untranslatable words, cultural references, wordplay, and maintaining tone. Translation skills develop through practice, extensive reading in both languages, cultural knowledge, and understanding translation theory. These skills are valuable for careers in translation, interpretation, international business, and diplomacy.', 
                examples: ['Literal vs idiomatic: meaning matters more than word-for-word', 'Cultural adaptation ensures translations make sense to target audience', 'Different translation approaches suit different purposes', 'Understanding context and culture is essential for good translation', 'Translation skills require deep knowledge of both languages'], 
                grade: 12 
            }
        ]
    }
};

// Get lessons for a subject and grade
function getLessonsForSubject(subject, grade) {
    const subjectData = lessonData[subject];
    if (!subjectData) return [];
    
    // Default to closest grade if exact grade not found
    const availableGrades = Object.keys(subjectData).map(Number).sort((a, b) => a - b);
    let selectedGrade = grade;
    
    if (!subjectData[grade]) {
        // Find closest grade
        selectedGrade = availableGrades.find(g => g >= grade) || availableGrades[availableGrades.length - 1];
    }
    
    return subjectData[selectedGrade] || [];
}

// Check if lesson is completed
function isLessonCompleted(lessonId) {
    const completed = JSON.parse(localStorage.getItem('astrolearn_completed_lessons') || '[]');
    return completed.includes(lessonId);
}

// Mark lesson as completed
function completeLesson(lessonId, subject) {
    const completed = JSON.parse(localStorage.getItem('astrolearn_completed_lessons') || '[]');
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('astrolearn_completed_lessons', JSON.stringify(completed));
        
        // Award XP points for completing a lesson (50 XP per lesson)
        const currentXP = parseInt(localStorage.getItem('astrolearn_xp_points') || '0');
        const newXP = currentXP + 50;
        localStorage.setItem('astrolearn_xp_points', newXP.toString());
        
        // Add to recent activity
        addToRecentActivity({
            type: 'lesson',
            action: 'Completed',
            title: getLessonTitle(lessonId),
            subject: subject,
            timestamp: new Date().toISOString()
        });
        
        // Update progress
        updateSubjectProgress(subject);
        
        // Trigger storage event for other tabs
        window.dispatchEvent(new Event('storage'));
    }
}

// Reset lesson progress
function resetLesson(lessonId) {
    const completed = JSON.parse(localStorage.getItem('astrolearn_completed_lessons') || '[]');
    const index = completed.indexOf(lessonId);
    if (index > -1) {
        completed.splice(index, 1);
        localStorage.setItem('astrolearn_completed_lessons', JSON.stringify(completed));
        
        // Update progress
        const subject = lessonId.split('_')[0];
        updateSubjectProgress(subject);
        
        window.dispatchEvent(new Event('storage'));
    }
}

// Get lesson title
function getLessonTitle(lessonId) {
    const parts = lessonId.split('_');
    const subject = parts[0];
    const grade = parseInt(parts[1]);
    const lessonNum = parseInt(parts[2]);
    
    const lessons = getLessonsForSubject(subject, grade);
    const lesson = lessons[lessonNum - 1];
    return lesson ? lesson.title : 'Lesson';
}

// Calculate progress for a subject
function calculateSubjectProgress(subject, grade) {
    const lessons = getLessonsForSubject(subject, grade);
    if (lessons.length === 0) return 0;
    
    const completed = JSON.parse(localStorage.getItem('astrolearn_completed_lessons') || '[]');
    const subjectLessons = lessons.map(l => l.id);
    const completedCount = subjectLessons.filter(id => completed.includes(id)).length;
    
    return Math.round((completedCount / lessons.length) * 100);
}

// Update subject progress (called after lesson completion)
function updateSubjectProgress(subject) {
    // This will be handled by the dashboard and subject pages
    window.dispatchEvent(new CustomEvent('progressUpdated', { detail: { subject } }));
}

// Add to recent activity
function addToRecentActivity(activity) {
    const activities = JSON.parse(localStorage.getItem('astrolearn_recent_activities') || '[]');
    activities.unshift(activity);
    // Keep only last 50 activities
    if (activities.length > 50) {
        activities.pop();
    }
    localStorage.setItem('astrolearn_recent_activities', JSON.stringify(activities));
}

// Get recent activities (last 4 by default, more if expanded)
function getRecentActivities(limit = 4) {
    const activities = JSON.parse(localStorage.getItem('astrolearn_recent_activities') || '[]');
    return activities.slice(0, limit);
}

