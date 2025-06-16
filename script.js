// Full 104 flashcards data organized by category
const flashcardsData = [
  {
    question: "¿Qué es el razonamiento cuantitativo?",
    answer: "Capacidad de usar números y operaciones para resolver problemas.",
    category: "aritmetica"
  },
  {
    question: "¿Qué abarca la aritmética, álgebra y geometría?",
    answer: "Ramas que estudian números, operaciones y propiedades del espacio.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son los números primos y compuestos?",
    answer: "Primos: divisibles solo por 1 y sí mismos. Compuestos: más de dos divisores.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son razones, proporciones y porcentajes?",
    answer: "Comparaciones de cantidades: razones, proporciones y porcentajes.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es la jerarquía de operaciones?",
    answer: "Orden de operaciones: paréntesis, exponentes, multiplicación, división, suma y resta.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son las operaciones algebraicas?",
    answer: "Manipulaciones de expresiones algebraicas: suma, resta, multiplicación y división.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es la solución de desigualdades?",
    answer: "Encontrar valores que satisfacen una desigualdad en la recta numérica.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es el cálculo de eventos?",
    answer: "Estudio de eventos y sus probabilidades usando herramientas matemáticas.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son las funciones?",
    answer: "Relaciones que asignan a cada elemento de un conjunto un único elemento de otro.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es la combinatoria?",
    answer: "Estudio de conteos y arreglos de elementos en conjuntos.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son los elementos de probabilidad?",
    answer: "Conceptos como probabilidad clásica, condicional y el teorema de Bayes.",
    category: "aritmetica"
  },
  {
    question: "¿Cómo se toman decisiones en procesos cotidianos?",
    answer: "Razonamiento lógico y cuantitativo para evaluar opciones y consecuencias.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es la división?",
    answer: "Operación matemática que representa la repartición equitativa de un número.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es un número par?",
    answer: "Número entero divisible por 2 sin residuo.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es un número impar?",
    answer: "Número entero que no es divisible por 2, dejando un residuo de 1.",
    category: "aritmetica"
  },
  {
    question: "¿Qué son los ángulos y áreas?",
    answer: "Medidas de rotación y superficie, calculadas con razones trigonométricas.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es la geometría analítica?",
    answer: "Estudio de la geometría usando un sistema de coordenadas.",
    category: "aritmetica"
  },
  {
    question: "¿Qué es el tratamiento de datos?",
    answer: "Análisis y presentación de datos usando medidas estadísticas.",
    category: "aritmetica"
  },
  {
    question: "Teorema de Pitágoras",
    answer: "Relación en un triángulo rectángulo<br>\\( a^2 + b^2 = c^2 \\)<br>donde <em>c</em> es la hipotenusa.",
    category: "geometria"
  },
  {
    question: "¿Qué es un círculo?",
    answer: "Figura geométrica plana formada por todos los puntos equidistantes de un centro.",
    category: "geometria"
  },
  {
    question: "Área del círculo",
    answer: "Cálculo del área de un círculo<br>\\( A = \\pi r^2 \\)<br>donde <em>r</em> es el radio.",
    category: "geometria"
  },
  {
    question: "¿Qué es un ángulo recto?",
    answer: "Un ángulo que mide exactamente 90 grados, formando una esquina perfecta.",
    category: "geometria"
  },
  {
    question: "Volumen del cubo",
    answer: "Volumen basado en la longitud del lado<br>\\( V = a^3 \\)<br>donde <em>a</em> es el lado del cubo.",
    category: "geometria"
  },
  {
    question: "Distancia entre dos puntos",
    answer: "Distancia en el plano cartesiano<br>\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)",
    category: "geometria"
  },
  {
    question: "Media aritmética",
    answer: "Promedio de números<br>\\( \\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\)",
    category: "estadistica"
  },
  {
    question: "Interés compuesto",
    answer: "Dinero acumulado con interés compuesto<br><span class=\"formula\">\\( A = P \\left(1 + \\frac{r}{n} \\right)^{nt} \\)</span><br><em>P</em>: capital, <em>r</em>: tasa anual,<br><em>n</em>: periodos/año, <em>t</em>: años",
    category: "estadistica"
  },
  {
    question: "Probabilidad básica",
    answer: "Probabilidad de un evento<br><span class=\"formula\">\\( P(A) = \\frac{\\text{casos favorables}}{\\text{total de casos}} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Ecuación de la recta",
    answer: "Fórmula para graficar una línea<br><span class=\"formula\">\\( y = mx + b \\)</span><br><em>m</em>: pendiente, <em>b</em>: intersección eje y",
    category: "estadistica"
  },
  {
    question: "Máximo Común Divisor (MCD)",
    answer: "Mayor número que divide dos números sin residuo.",
    category: "estadistica"
  },
  {
    question: "Mínimo Común Múltiplo (MCM)",
    answer: "Múltiplo positivo más pequeño común a dos o más números.",
    category: "estadistica"
  },
  {
    question: "Área del triángulo",
    answer: "Área según base y altura<br><span class=\"formula\">\\( A = \\frac{b \\cdot h}{2} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Suma de serie aritmética",
    answer: "Suma de términos en secuencia con diferencia constante<br><span class=\"formula\">\\( S_n = \\frac{n}{2} (a_1 + a_n) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Varianza",
    answer: "Medida de dispersión de datos<br><span class=\"formula\">\\( \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\)</span>",
    category: "estadistica"
  },
  {
    question: "Distancia en plano cartesiano",
    answer: "Distancia entre dos puntos calculada con coordenadas<br><span class=\"formula\">\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Perímetro del rectángulo",
    answer: "Suma de todos sus lados<br><span class=\"formula\">\\( P = 2(b + h) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Fórmula de combinación",
    answer: "Cálculo de combinaciones<br><span class=\"formula\">\\( C(n, k) = \\frac{n!}{k!(n-k)!} \\)</span>",
    category: "estadistica"
  },
  {
    question: "¿Cuál es la fórmula general?",
    answer: "Fórmula para resolver ecuaciones cuadráticas<br><span class=\"formula\">\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Criba de Eratóstenes",
    answer: "Método para encontrar números primos.",
    category: "estadistica"
  },
  {
    question: "Factorización prima",
    answer: "Descomposición de un número en factores primos.",
    category: "estadistica"
  },
  {
    question: "Propiedad distributiva",
    answer: "<span class=\"formula\">\\( a(b+c) = ab + ac \\)</span>",
    category: "estadistica"
  },
  {
    question: "Teorema de Wilson",
    answer: "Si \\( p \\) es primo, entonces: <span class=\"formula\">\\( (p-1)! \\equiv -1 \\mod p \\)</span>",
    category: "estadistica"
  },
  {
    question: "Notación científica",
    answer: "<span class=\"formula\">\\( a \\times 10^b \\)</span>",
    category: "estadistica"
  },
  {
    question: "Regla de tres",
    answer: "Cálculo proporcional directo e inverso.",
    category: "estadistica"
  },
  {
    question: "Múltiplos y divisibilidad",
    answer: "Reglas básicas para encontrar divisores.",
    category: "estadistica"
  },
  {
    question: "Propiedad conmutativa",
    answer: "<span class=\"formula\">\\( a + b = b + a \\)</span> y <span class=\"formula\">\\( a \\times b = b \\times a \\)</span>",
    category: "estadistica"
  },
  {
    question: "Propiedad asociativa",
    answer: "<span class=\"formula\">\\( (a+b)+c = a+(b+c) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Serie geométrica",
    answer: "<span class=\"formula\">\\( S_n = a \\frac{1-r^n}{1-r} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Suma de progresión aritmética",
    answer: "<span class=\"formula\">\\( S_n = \\frac{n}{2} (a_1 + a_n) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Ecuaciones polinómicas",
    answer: "Métodos de factorización.",
    category: "estadistica"
  },
  {
    question: "Raíces cuadráticas",
    answer: "<span class=\"formula\">\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Desigualdades cuadráticas",
    answer: "Resolución mediante factorización y prueba de valores.",
    category: "estadistica"
  },
  {
    question: "Triángulo de Pascal",
    answer: "Representación de coeficientes binomiales.",
    category: "estadistica"
  },
  {
    question: "Ley de los senos",
    answer: "<span class=\"formula\">\\( \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Ley de los cosenos",
    answer: "<span class=\"formula\">\\( c^2 = a^2 + b^2 - 2ab \\cos C \\)</span>",
    category: "estadistica"
  },
  {
    question: "Área de un triángulo",
    answer: "<span class=\"formula\">\\( A = \\frac{1}{2} \\times b \\times h \\)</span>",
    category: "estadistica"
  },
  {
    question: "Área de un trapecio",
    answer: "<span class=\"formula\">\\( A = \\frac{(B+b)h}{2} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Distancia entre dos puntos",
    answer: "<span class=\"formula\">\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Pendiente de una recta",
    answer: "<span class=\"formula\">\\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Ecuación punto-pendiente",
    answer: "<span class=\"formula\">\\( y - y_1 = m(x - x_1) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Límite de una función",
    answer: "<span class=\"formula\">\\( \\lim_{x \\to a} f(x) \\)</span>",
    category: "estadistica"
  },
  {
    question: "Derivada de una función",
    answer: "<span class=\"formula\">\\( f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Integral definida",
    answer: "<span class=\"formula\">\\( \\int_a^b f(x)  dx \\)</span>",
    category: "estadistica"
  },
  {
    question: "Integral indefinida",
    answer: "<span class=\"formula\">\\( \\int f(x)  dx = F(x) + C \\)</span>",
    category: "estadistica"
  },
  {
    question: "Teorema del valor medio",
    answer: "<span class=\"formula\">\\( f'(c) = \\frac{f(b)-f(a)}{b-a} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Transformación de funciones",
    answer: "Translaciones y reflexiones.",
    category: "estadistica"
  },
  {
    question: "Funciones cuadráticas",
    answer: "Parábola y vértice.",
    category: "estadistica"
  },
  {
    question: "Principio de adición",
    answer: "Cuenta de formas posibles.",
    category: "estadistica"
  },
  {
    question: "Principio de multiplicación",
    answer: "Cuenta de arreglos ordenados.",
    category: "estadistica"
  },
  {
    question: "Permutaciones",
    answer: "<span class=\"formula\">\\( P(n,r) = \\frac{n!}{(n-r)!} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Combinaciones",
    answer: "<span class=\"formula\">\\( C(n,r) = \\frac{n!}{r!(n-r)!} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Probabilidad clásica",
    answer: "<span class=\"formula\">\\( P(A) = \\frac{\\text{casos favorables}}{\\text{total de casos posibles}} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Distribución binomial",
    answer: "<span class=\"formula\">\\( P(k) = C(n,k) p^k (1-p)^{n-k} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Probabilidad condicional",
    answer: "<span class=\"formula\">\\( P(A | B) = \\frac{P(A \\cap B)}{P(B)} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Teorema de Bayes",
    answer: "<span class=\"formula\">\\( P(A | B) = \\frac{P(B | A) P(A)}{P(B)} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Esperanza matemática",
    answer: "Valor esperado de un evento aleatorio.",
    category: "estadistica"
  },
  {
    question: "Varianza",
    answer: "<span class=\"formula\">\\( \\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} \\)</span>",
    category: "estadistica"
  },
  {
    question: "Distribución normal",
    answer: "Campana de Gauss.",
    category: "estadistica"
  },
  {
    question: "Intervalos de confianza",
    answer: "Cálculo de límites de estimaciones.",
    category: "estadistica"
  },
  {
    question: "Toma de decisiones",
    answer: "Interpretación de encuestas.",
    category: "estadistica"
  },
  {
    question: "Censo vs encuesta",
    answer: "Diferencias y aplicaciones.",
    category: "estadistica"
  },
  {
    question: "Riesgo en decisiones",
    answer: "Evaluación de incertidumbre.",
    category: "estadistica"
  },
  {
    question: "Medidas de tendencia central",
    answer: "Mediana, moda y rango.",
    category: "estadistica"
  },
  {
    question: "Diagramas de dispersión",
    answer: "Correlación entre variables.",
    category: "estadistica"
  },
  {
    question: "Coeficiente de correlación",
    answer: "Medida de relación entre datos.",
    category: "estadistica"
  },
  {
    question: "Histograma",
    answer: "Representación gráfica de frecuencias.",
    category: "estadistica"
  },
  {
    question: "Prueba de hipótesis",
    answer: "Evaluación estadística de suposiciones para validar o rechazar hipótesis.",
    category: "estadistica"
  },
  {
    question: "Regresión lineal",
    answer: "Modelo matemático que describe la relación lineal entre variables.",
    category: "estadistica"
  },
  {
    question: "Resolución de problemas verbales",
    answer: "Interpretación de enunciados matemáticos para resolver ecuaciones.",
    category: "estadistica"
  },
  {
    question: "Ángulos y áreas",
    answer: "Tipos de ángulos y cálculo de áreas según la figura geométrica.",
    category: "estadistica"
  },
  {
    question: "Operaciones algebraicas",
    answer: "Suma, resta, multiplicación y división de expresiones algebraicas.",
    category: "estadistica"
  },
  {
    question: "Operación de conjuntos",
    answer: "Unión, intersección, diferencia y complemento de conjuntos.",
    category: "estadistica"
  },
  {
    question: "Tratamiento de datos",
    answer: "Organización, análisis y presentación efectiva de datos.",
    category: "estadistica"
  },
  {
    question: "Análisis de datos en procesos cotidianos",
    answer: "Uso de estadísticas y probabilidades para interpretar información diaria.",
    category: "estadistica"
  },
  {
    question: "Medidas estadísticas",
    answer: "Tendencia central: media, mediana, moda; dispersión: varianza y desviación estándar.",
    category: "estadistica"
  },
  {
    question: "Divisibilidad y criterios de divisibilidad",
    answer: "Reglas para determinar divisibilidad sin división. Ejemplo: <span class=\"formula\">\\(\\text{Un número es divisible por } 3 \\text{ si la suma de sus cifras es múltiplo de } 3.\\)</span>",
    category: "estadistica"
  },
  {
    question: "Propiedades de los exponentes",
    answer: "Reglas fundamentales de la potenciación. Ejemplo: <span class=\"formula\">\\(a^m \\cdot a^n = a^{m+n}\\)</span>",
    category: "estadistica"
  },
  {
    question: "Ecuaciones cuadráticas y la fórmula general",
    answer: "Métodos para resolver ecuaciones de segundo grado. Ejemplo: <span class=\"formula\">\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)</span>",
    category: "estadistica"
  },
  {
    question: "Polinomios y sus factorizaciones",
    answer: "Descomposición de polinomios en factores. Ejemplo: <span class=\"formula\">\\(x^2 - 5x + 6 = (x - 2)(x - 3)\\)</span>",
    category: "estadistica"
  },
  {
    question: "Geometría del círculo",
    answer: "Área, perímetro y ángulos centrales. Ejemplo: <span class=\"formula\">\\(A = \\pi r^2, \\quad C = 2\\pi r\\)</span>",
    category: "estadistica"
  },
  {
    question: "Volumen y área de sólidos",
    answer: "Fórmulas para calcular volumen y área de cuerpos en 3D. Ejemplo: <span class=\"formula\">\\(V_{\\text{esfera}} = \\frac{4}{3} \\pi r^3\\)</span>",
    category: "estadistica"
  },
  {
    question: "Derivadas y reglas de derivación",
    answer: "Concepto de tasa de cambio instantánea. Ejemplo: <span class=\"formula\">\\(\\frac{d}{dx} (x^n) = n x^{n-1}\\)</span>",
    category: "estadistica"
  },
  {
    question: "Integrales y área bajo la curva",
    answer: "Introducción a la integración definida e indefinida. Ejemplo: <span class=\"formula\">\\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\)</span>",
    category: "estadistica"
  },
  {
    question: "Series y sumatorias",
    answer: "Cálculo de sumas finitas e infinitas. Ejemplo: <span class=\"formula\">\\(S_n = \\sum_{i=1}^{n} a_i\\)</span>",
    category: "estadistica"
  },
  {
    question: "Distribuciones de probabilidad",
    answer: "Modelos para representar eventos aleatorios (binomial y normal). Ejemplo binomial: <span class=\"formula\">\\(P(k) = \\binom{n}{k} p^k (1 - p)^{n-k}\\)</span>",
    category: "estadistica"
  },
  {
    question: "Esperanza matemática y varianza",
    answer: "Medidas de tendencia central y dispersión. Ejemplo: <span class=\"formula\">\\(E(X) = \\sum x_i P(x_i), \\quad \\sigma^2 = \\sum (x_i - E(X))^2 P(x_i)\\)</span>",
    category: "estadistica"
  },
  {
    question: "Regresión lineal y correlación",
    answer: "Análisis de relaciones entre variables. Ejemplo: <span class=\"formula\">\\(y = mx + b\\)</span>",
    category: "estadistica"
  },
  {
    question: "Teorema del Binomio",
    answer: "Expansión de expresiones binomiales usando coeficientes binomiales. Fórmula: <span class=\"formula\">\\((a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k\\)</span>",
    category: "estadistica"
  },
  {
    question: "Teorema Fundamental del Cálculo",
    answer: "Relación entre derivación e integración. Parte 1: <span class=\"formula\">\\(\\frac{d}{dx}\\int_a^x f(t)  dt = f(x)\\)</span><br>Parte 2: <span class=\"formula\">\\(\\int_a^b f(x)  dx = F(b) - F(a)\\)</span>",
    category: "estadistica"
   },
];

// DOM elements
const flashcardsContainer = document.querySelector('.flashcards-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize flashcards
function initFlashcards() {
  displayFlashcards(flashcardsData);
  setupEventListeners();
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Display flashcards
function displayFlashcards(flashcards) {
  flashcardsContainer.innerHTML = '';

  flashcards.forEach(flashcard => {
    const cardElement = document.createElement('div');
    cardElement.className = `flashcard ${flashcard.category}`;
    cardElement.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="flashcard-content">
            <span class="flashcard-category">${flashcard.category.toUpperCase()}</span>
            <div class="flashcard-question">${flashcard.question}</div>
          </div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-content">
            <div class="flashcard-answer">${flashcard.answer}</div>
          </div>
        </div>
      </div>
    `;
    flashcardsContainer.appendChild(cardElement);
  });

  // Add click event to each flashcard
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
      // Close any other flipped flashcards
      document.querySelectorAll('.flashcard.flipped').forEach(flippedCard => {
        if (flippedCard !== card) {
          flippedCard.classList.remove('flipped');
        }
      });
      // Toggle clicked flashcard
      card.classList.toggle('flipped');
    });
  });

  // Trigger MathJax typesetting after rendering flashcards
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Filter flashcards by category
function filterFlashcards(category) {
  if (category === 'all') {
    displayFlashcards(flashcardsData);
  } else {
    const filteredFlashcards = flashcardsData.filter(
      flashcard => flashcard.category === category
    );
    displayFlashcards(filteredFlashcards);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Filter flashcards
      filterFlashcards(button.dataset.category);
    });
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', initFlashcards);

