import { Injectable } from '@angular/core';
import { Compatibilidad } from '../models/compatibilidad';

@Injectable({
  providedIn: 'root'
})
export class CompatibilidadService {
  public listadoCompatibilidad: Array<Compatibilidad>;

  constructor() { 
    this.listadoCompatibilidad = new Array<Compatibilidad>;
    this.cargarNumeros();
  }

  private cargarNumeros() {
    this.cargarNumeroUno();
    this.cargarNumeroDos();
    this.cargarNumeroTres();
    this.cargarNumeroCuatro();
    this.cargarNumeroCinco();
    this.cargarNumeroSeis();
    this.cargarNumeroSiete();
    this.cargarNumeroOcho();
    this.cargarNumeroNueve();
  }

  private cargarNumeroUno() {
    const compatibilidad = [
      {
        id: 100, numero1: 1, numero2: 1,
        descripcion: 'Cuando un 1 se encuentra con otro 1, es natural que surja una competencia constante entre ambos. Ambos querrán liderar, lo que puede generar una lucha de poder. Los celos pueden ser un desafío, ya que ambos querrán saber qué está haciendo el otro. Sin embargo, esta relación tiene un gran potencial, ya que ambos son muy activos y empujan hacia adelante. La clave estará en evitar que las discusiones se vuelvan hirientes, manteniendo el respeto mutuo. Si logran respetar la individualidad del otro, el compañerismo y el compartir pueden florecer.'
      },
      {
        id: 101, numero1: 1, numero2: 2,
        descripcion: 'Cuando un 1 se encuentra con un 2, es de esperar que el 1 asuma un rol de liderazgo. Sin embargo, el 2, con su habilidad para acompañar y cooperar, no tendrá problemas en adaptarse. Esta pareja puede lograr grandes cosas juntos, ya que se complementan perfectamente. El 2 no buscará ser la cabeza de la relación, sino que apoyará al 1 en cada decisión. Esta combinación destaca por la diversión y las largas conversaciones animadas, creando una conexión basada en la comunicación.'
      },
      {
        id: 102, numero1: 1, numero2: 3,
        descripcion: 'El 1 y el 3 son números fuertes y dinámicos. El 3 aporta alegría, diversión y comunicación a la relación, lo cual motiva al 1, quien a su vez impulsa la creatividad. Ambos disfrutan de conversaciones estimulantes que les ayudan a encontrar soluciones a sus problemas. Esta pareja puede establecer bases sólidas para una relación exitosa, llevando a cabo proyectos de manera ordenada y práctica, haciendo tangibles sus deseos.'
      },
      {
        id: 103, numero1: 1, numero2: 4,
        descripcion: 'En esta relación, el 1 es impulsivo y dinámico, mientras que el 4 es reflexivo y pausado. Sus diferencias pueden generar fricciones, ya que el 1 no querrá esperar y el 4 no actuará sin estar completamente seguro. La clave para esta pareja será la paciencia y llegar a acuerdos mutuos. Si logran hacerlo, podrán enfrentar juntos grandes cambios, como mudanzas, cambios laborales importantes, e incluso la posibilidad de formar una familia numerosa.'
      },
      {
        id: 104, numero1: 1, numero2: 5,
        descripcion: 'Cuando un 1 y un 5 se encuentran, ambos valoran la libertad y la independencia. Su relación se basará en momentos intensos y apasionados, aunque ambos necesitarán su espacio personal. Aunque son similares en muchos aspectos, el 1 puede ser más celoso, buscando saber qué ha hecho el 5 en su ausencia. Aun así, formarán una vibración familiar armoniosa, logrando equilibrio y protección en su hogar.'
      },
      {
        id: 105, numero1: 1, numero2: 6,
        descripcion: 'El 1 y el 6 pueden enfrentarse a conflictos de poder, ya que ambos quieren dirigir, pero por diferentes motivos. El 1 busca autoridad, mientras que el 6 quiere cuidar de su familia y tomar decisiones importantes. Aunque pueden chocar, encontrarán una conexión espiritual profunda que les permitirá disfrutar de la compañía del otro a pesar de sus diferencias.'
      },
      {
        id: 106, numero1: 1, numero2: 7,
        descripcion: 'Esta es una relación complicada. El 1 querrá impulsar al 7, quién puede parecer inactivo o demasiado reflexivo. Mientras el 1 se desespera por la falta de acción del 7, éste está procesando todo desde un punto de vista intelectual y guiándose por su intuición. Por otro lado, el 7 ve al 1 como impulsivo y con un carácter fuerte. Si logran entenderse, esta pareja podrá alcanzar sus ambiciones y obtener prosperidad económica.'
      },
      {
        id: 107, numero1: 1, numero2: 8,
        descripcion: 'Cuando un 1 se encuentra con un 8, al principio puede sentir que ha encontrado a su pareja ideal. Sin embargo, sus ambiciones y formas de enfrentar la vida pueden chocar, ya que ambos son independientes y no aceptan fácilmente consejos externos. No obstante, juntos pueden ayudar a muchas personas y darse cuenta de que sus logros y ambiciones sólo tienen sentido si se comparten.'
      },
      {
        id: 108, numero1: 1, numero2: 9,
        descripcion: 'Esta es una relación de mutua admiración. El 1 ve en el 9 una fuente inagotable de conocimiento, mientras que el 9 encuentra en el 1 a alguien capaz de hacer realidad sus sueños. El 9 comprende a todos los números y se adapta con facilidad, lo que hace que esta pareja sea casi perfecta. El éxito está asegurado, y el 1 se sentirá muy cómodo al ver que juntos forman un número con su misma vibración.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroDos() {
    const compatibilidad = [
      {
        id: 109, numero1: 2, numero2: 2,
        descripcion: 'Cuando los 2 se encuentran en el amor, se crea un caudal de ternura, cuidado y afecto mutuo. Ambos buscan lo mejor para el otro, se comprenden, se cuidan y se acompañan en cada paso y situación, logrando siempre un equilibrio. Esta unión es ideal porque cada uno ofrece exactamente lo que el otro necesita. Juntos, construirán una vida basada en sólidos cimientos, asegurando que cada proyecto fluya de manera práctica y sin complicaciones.'
      },
      {
        id: 110, numero1: 2, numero2: 3,
        descripcion: 'Esta es una relación llena de momentos compartidos y diálogo. Al 3 le encanta contar historias y expresar su amor con palabras, lo que hace que el 2 se sienta amado y valorado. El 2, con su paciencia y capacidad de escucha, se convierte en el complemento perfecto para el 3, quien aporta diversión y alegría a la relación. La química entre ellos, sumada al amor y la comunicación, crea una conexión física y emocional gratificante, donde los encuentros amorosos son intensos y satisfactorios.'
      },
      {
        id: 111, numero1: 2, numero2: 4,
        descripcion: 'El 2 y el 4 forman una pareja armoniosa y tranquila. El 2 es un excelente compañero para el 4, ya que ambos comparten una naturaleza pasiva que les permite moverse al mismo ritmo. El 4, con su trabajo minucioso y dedicado, asegura un futuro estable para ambos, mientras que el 2, al sentirse amado y comprendido, acompaña al 4 en cada paso. Juntos, construirán una familia que no solo logrará la armonía deseada, sino que también se sentirá afortunada en su unión.'
      },
      {
        id: 112, numero1: 2, numero2: 5,
        descripcion: 'Un 2 siempre buscará acompañar a un 5 en su vida llena de aventuras y nuevos rumbos. El 5 apreciará esta compañía, siempre y cuando no sienta que su libertad e independencia están siendo limitadas. A veces, el 2 puede absorber demasiado tiempo del 5 en su afán de estar acompañado, lo que puede resultar molesto para el 5. Si el 2 logra respetar el espacio y la independencia del 5, no habrá problemas, y el 5 volverá en busca del amor que el 2 le ofrece. Esta pareja, a través del compañerismo y el amor del 2, y las variadas formas de amar del 5, encontrará una fuerte unión espiritual y amorosa.'
      },
      {
        id: 113, numero1: 2, numero2: 6,
        descripcion: 'El 2 y el 6 buscan la armonía y el amor en todas sus formas, aunque con enfoques ligeramente diferentes: el 2 se centra en la relación de pareja, mientras que el 6 se enfoca en el bienestar familiar. El 6 es responsable en sus relaciones, y el 2 es amoroso y compañero, aunque a veces puede volverse indeciso y ciclotímico en sus emociones. El 6 necesita que el 2 le demuestre su amor, ya que de lo contrario puede sentir una frustración que no soportaría. Juntos, prosperarán económicamente, siempre con la intención de mejorar su vida en pareja, aportando confort, armonía y disfrute.'
      },
      {
        id: 114, numero1: 2, numero2: 7,
        descripcion: 'El 2 y el 7 forman una dupla brillante, donde ambos valoran el aprendizaje y respetan el espacio personal del otro. El 2 siempre acompañará al 7 en su búsqueda de conocimiento, quizás ayudándolo con materiales o recursos necesarios para sus estudios. Esta pareja es enriquecedora y profunda, con un gran desarrollo en el ámbito espiritual. El 7 es reservado y callado, mientras que el 2 lo acompaña en sus silencios y breves comentarios. Juntos, se dedicarán a la percepción, la ayuda humanitaria y la educación, lo que será un pilar fundamental en su relación.'
      },
      {
        id: 115, numero1: 2, numero2: 8,
        descripcion: 'Cuando un 2 se une a un 8, puede sentir que este está demasiado enfocado en sus negocios, descuidando la vida de pareja. Sin embargo, si el 2 encuentra maneras de apoyar al 8 en sus actividades laborales, aunque sea con pequeños gestos, la relación puede florecer. El 8, aunque centrado en su vida profesional, valorará el apoyo del 2, lo que contribuirá a estabilizar su humor. Si esta pareja logra combinar el amor del 2 con los logros materiales del 8, disfrutarán de una vida activa y llena de éxitos compartidos.'
      },
      {
        id: 116, numero1: 2, numero2: 9,
        descripcion: 'El 2 es un colaborador nato, siempre dispuesto a ayudar y encontrar soluciones a los problemas de pareja. El 9, con su vasto conocimiento y diversos intereses, está enfocado en el servicio a los demás. Aunque ambos comparten un espíritu de ayuda, el 2 lo enfoca en la relación, mientras que el 9 lo extiende a todos, lo que a veces puede dejar al 2 sintiéndose desatendido. Sin embargo, esta pareja tiene una vibración de número maestro, lo que les permite llevar adelante una relación poco común, llena de experiencias enriquecedoras para ambos.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroTres() {
    const compatibilidad = [
      {
        id: 117, numero1: 3, numero2: 3,
        descripcion: 'Ambos 3 forman una pareja altamente estimulante, tanto en lo creativo como en el diálogo. Su naturaleza comunicativa y expresiva se manifiesta en todas las áreas de su vida juntos; incluso en actividades cotidianas como cocinar, disfrutan siendo creativos, narrando con entusiasmo cada ingrediente que añaden. La necesidad de compartir lo que sienten, piensan y hacen es una constante en su relación. Sin embargo, aunque la comunicación es fundamental, corren el riesgo de hablar en exceso y no medir sus palabras, lo que podría derivar en malentendidos, discusiones y posibles rupturas. Ambos tienen dificultades para guardarse algo. Aun así, esta combinación tiene el potencial de formar una familia donde el diálogo abierto y sincero sea la norma, sin dejar nada por decir.'
      },
      {
        id: 118, numero1: 3, numero2: 4,
        descripcion: 'La relación entre un 3 y un 4 puede parecer inicialmente incompatible debido a sus marcadas diferencias. El 3 es espontáneo, comunicativo y creativo, mientras que el 4 es estructurado, ordenado y a veces obstinado. Sin embargo, estas diferencias pueden complementarse. El 3 aporta alegría, diversión y creatividad a la relación, mientras que el 4 ofrece estabilidad, orden y una reflexión cuidadosa antes de actuar. A pesar de sus contrastes, esta pareja puede encontrar una forma de comunicarse a un nivel más espiritual, conectándose a menudo sin necesidad de palabras y descubriendo que sus diferencias los unen en una comprensión mutua profunda.'
      },
      {
        id: 119, numero1: 3, numero2: 5,
        descripcion: 'Un 3 y un 5 forman una pareja que nunca se aburrirá. Ambos comparten una pasión por la vida, por lo nuevo y por las experiencias excitantes, lo que les permite divertirse juntos. El 3, con su tendencia a expresar sus emociones de manera exagerada, puede llenar de palabras cada momento, mientras que el 5, aunque inicialmente se divierta, podría eventualmente perder interés si algo más capta su atención. Esta relación es como dinamita: ambos buscarán cumplir sus ambiciones más profundas y podrán embarcarse en proyectos ambiciosos que reflejen su amor por la buena vida y sus logros materiales.'
      },
      {
        id: 120, numero1: 3, numero2: 6,
        descripcion: 'En esta relación, el 3 aporta alegría, diálogo y distracción, mientras que el 6 se enfoca en asegurar el bienestar de ambos, asumiendo la responsabilidad del hogar, el confort y la armonía familiar. El 6 necesita ser quien organice y controle estas áreas, mientras el 3 anima y enriquece la relación con su energía. A lo largo de su relación, enfrentarán diversas situaciones que, si abordan de manera positiva, los llevarán a desarrollar un profundo deseo de ayudar a los demás y brindar apoyo a muchas personas.'
      }, 
      {
        id: 121, numero1: 3, numero2: 7,
        descripcion: 'La relación entre un 3 y un 7 es una combinación de opuestos: la gran expresividad del 3 contrasta con el silencio reflexivo del 7. Mientras que al 3 le encanta hablar, a veces sin pensar demasiado, el 7 prefiere tomarse su tiempo, analizando cada uno de sus pensamientos antes de ofrecer una respuesta o una opinión. Sin embargo, como ocurre con muchos opuestos, estos dos saben complementarse muy bien. Juntos, forman una pareja con gran impulso, creatividad y energía, capaz de enfrentar cualquier desafío que se les presente.'
      },
      {
        id: 122, numero1: 3, numero2: 8,
        descripcion: 'Cuando un 3 se relaciona con un 8, debe estar preparado para las críticas constantes y el humor sarcástico del 8, lo que podría generar fricciones, dado que el 3 es naturalmente alegre y comunicativo. Al 8, por otro lado, no le agradará el ocio en el que el 3 tiende a caer ocasionalmente. El 8 es una persona ambiciosa que trabaja arduamente para alcanzar sus objetivos, y podría ver en el 3 una pérdida de tiempo y energía que contrasta con su enfoque disciplinado. Sin embargo, la conexión entre ellos puede estar influenciada por la vibración de un número maestro, que podría aportar una dimensión mágica a su relación, siempre y cuando ambos establezcan claramente lo que cada uno aporta a la pareja.'
      },
      {
        id: 123, numero1: 3, numero2: 9,
        descripcion: 'Esta es una pareja altamente compatible, unida por su amor compartido por el arte. Juntos, podrían crear obras de una belleza y talento admirables. El 3 es creativo y tiene una imaginación desbordante, mientras que el 9 es inspirado y posee una visión que va más allá de lo superficial. Sin embargo, el 9 exigirá sinceridad y compromiso en la relación, lo que obligará al 3 a moderar su impulsividad y sus deseos fuera de la pareja. Aun así, esta relación tiene el potencial de una comunicación fluida y sin obstáculos.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroCuatro() {
    const compatibilidad = [
      {
        id: 124, numero1: 4, numero2: 4,
        descripcion: 'Cuando los 4 se encuentran, el orden y la estructura se convierten en las piedras angulares de su relación. Ambos disfrutan de llevar una vida sistemática y sin contratiempos, lo que a menudo se traduce en una rutina que puede parecer monótona a los ojos de otros, pero que para ellos es esencial. Sin embargo, los imprevistos externos pueden desestabilizarlos, ya que los 4 tienden a paralizarse ante lo inesperado. Aun así, mediante una vida bien organizada, esta pareja puede construir bases sólidas para alcanzar metas importantes, como la compra de una casa o la creación de una empresa familiar con un futuro prometedor.'
      },
      {
        id: 125, numero1: 4, numero2: 5,
        descripcion: 'El 4 y el 5 tienen personalidades marcadamente diferentes. El 4 busca establecer orden en la relación, con horarios y actividades bien definidos, mientras que el 5 valora su libertad y se resiste a las estructuras rígidas. La incompatibilidad en cuanto a la gestión del tiempo y las demandas del 4 puede hacer que llegar a un acuerdo sea complicado para esta pareja. Sin embargo, si logran superar estas diferencias, podrían encontrar un terreno común en actividades relacionadas con la ayuda a los demás, quizás desarrollando proyectos educativos.'
      },
      {
        id: 126, numero1: 4, numero2: 6,
        descripcion: 'En esta combinación, la responsabilidad, la seguridad y los proyectos enfocados en la vida familiar son lo que une a esta pareja. El 4 tiende a ser muy comprometido con su trabajo, a veces descuidando a su pareja 6, quien está profundamente dedicada al hogar. El 6, sensible y protector, puede sentirse desatendido si percibe que el 4 no le presta suficiente atención. Sin embargo, el 4 busca la seguridad que el 6 puede ofrecerle. Esta pareja tiene una alta compatibilidad, ya que ambos comparten ambiciones similares en cuanto a responsabilidad y estabilidad, lo que les da grandes posibilidades de éxito en su vida en común.'
      },
      {
        id: 127, numero1: 4, numero2: 7,
        descripcion: 'El 4 y el 7 comparten un temperamento similar, pero con enfoques diferentes. Mientras que el 4 busca seguridad y organización en la pareja, el 7 analiza cada evento que ocurre a su alrededor, sumergiéndose en su mundo interior. Aunque desde fuera esta relación puede parecer seria o rutinaria, lo que realmente prevalece es su capacidad para elegir lo mejor para su desarrollo conjunto. El 4 podría desear más demostraciones afectivas de parte del 7, quien a veces se deja llevar por su introspección, dejando de lado a su compañero. A pesar de esto, la pareja se distingue por su aguda percepción y claridad, además de la vibración de un número maestro que refuerza su conexión.'
      },
      {
        id: 128, numero1: 4, numero2: 8,
        descripcion: 'Esta pareja tiende a basar su relación en los logros materiales, lo que los convierte en excelentes socios. El 4 aporta orden y dedicación, mientras que el 8 persigue sus ambiciones, muchas veces relacionadas con el poder económico. En el ámbito amoroso, ambos pueden no ser demasiado expresivos o afectuosos, aunque el 4 necesita sentirse seguro en este aspecto. Es crucial que ambos establezcan desde el principio qué aportará cada uno a la relación para evitar conflictos futuros. Aunque la comunicación entre ellos puede ser fluida, sus temperamentos también podrían llevarlos a discusiones.'
      },
      {
        id: 129, numero1: 4, numero2: 9,
        descripcion: 'El 4 y el 9 son bastante diferentes. Mientras que el 4 busca controlar todo a su alrededor, el 9 se dispersa entre múltiples intereses, relacionándose con muchas personas y actividades que le resultan atractivas. Este estilo de vida inquieto puede desorientar al 4, que prefiere el compromiso y la estabilidad en todo lo que hace, incluidas sus relaciones. Sin embargo, la combinación de estos dos números puede resultar beneficiosa cuando se trata de proyectos conjuntos, ya que tienen la capacidad de estructurar y planificar su vida juntos de manera práctica y con un criterio sólido.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroCinco() {
    const compatibilidad = [
      {
        id: 130, numero1: 5, numero2: 5,
        descripcion: 'Ambos 5 hacen una pareja increíblemente versátil y enérgica, casi siempre en movimiento. Son tan parecidos que, a pesar de su conexión inicial, podrían inquietarse si pasan demasiado tiempo juntos. Su pasión por los viajes y las actividades al aire libre actúa como un punto de encuentro y escape. Viven una vida llena de novedades, explorando nuevos caminos y proyectos que, si no logran centrarse, podrían quedar inconclusos debido a la inconstancia que ambos aportan a la relación. La rutina, que muchas parejas consideran parte de la vida diaria, para ellos es un motivo suficiente para distanciarse, ya que simplemente no la soportan. Esta relación puede prosperar si logran divertirse, mantener su libertad y encontrar un equilibrio intelectual que los mantenga conectados.'
      },
      {
        id: 131, numero1: 5, numero2: 6,
        descripcion: 'El 5 es un espíritu aventurero, siempre en busca de nuevas experiencias y cambios constantes, lo que puede generar tensión con el 6, que valora la estabilidad y el hogar. Aunque el 6 podría sentirse frustrado por no poder retener al 5 en un lugar por mucho tiempo, ambos comparten una profunda sensibilidad emocional. El 5 aporta creatividad y dinamismo en la intimidad, mientras que el 6 ofrece cuidado y protección, elementos esenciales para una vida de pareja satisfactoria. Esta combinación puede alcanzar una profunda conexión espiritual, llena de momentos sorprendentes y mágicos, gracias a la vibración del número 11 que los envuelve.'
      },
      {
        id: 132, numero1: 5, numero2: 7,
        descripcion: 'Esta pareja disfruta de la libertad, aunque cada uno a su manera: el 5 en el plano físico y el 7 en el mental. Ambos son intelectuales y comparten una afinidad por el conocimiento, lo que se convierte en un lazo fuerte entre ellos. Sin embargo, difieren en su enfoque: el 5 aprende a través de la interacción social, mientras que el 7 prefiere la soledad para analizar y reflexionar. Para que la relación funcione, deberán aprender a respetar los espacios del otro. Si lo logran, podrán conectarse intelectualmente y disfrutar de un diálogo profundo y significativo.'
      },
      {
        id: 133, numero1: 5, numero2: 8,
        descripcion: 'En una relación entre un 5 y un 8, es crucial establecer desde el principio que el 5 necesita libertad y no tolera ser controlado. Esto puede ser un desafío para el 8, que naturalmente busca tomar el control, no solo de la relación, sino también de los recursos financieros. El 8 es un trabajador incansable, con grandes ambiciones, algo que el 5 admirará. Sin embargo, el 8 es también posesivo y podría no estar dispuesto a compartir a su pareja con las numerosas amistades que el 5 tiende a cultivar. Esta pareja podrá encontrar una estructura y equilibrio práctico si ambos están dispuestos a ceder parte de sus propias inclinaciones y aceptar las necesidades del otro.'
      },
      {
        id: 134, numero1: 5, numero2: 9,
        descripcion: 'El 5 y el 9 comparten un amor por la interacción social y la comunicación. Mientras el 5 busca aprender a través de las experiencias de los demás, el 9 se involucra con el objetivo de ayudar y motivar a quienes lo rodean. Esta pareja siempre tendrá temas de conversación y encontrará en el otro una fuente inagotable de conocimiento intelectual. El 5 es creativo y el 9, inspirado, tiene la capacidad de soñar y encontrar soluciones a los problemas cotidianos. Juntos, descubrirán un mundo lleno de novedades, cambios y emocionantes viajes compartidos, además de disfrutar de una excelente vida sexual.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroSeis() {
    const compatibilidad = [
      {
        id: 135, numero1: 6, numero2: 6,
        descripcion: 'Si existe una pareja que encarna el ideal de amor y dedicación, es esta. Ambos 6 comparten un profundo deseo de cuidar y proteger al otro, prestando atención a cada detalle para asegurarse de que su pareja se sienta lo mejor posible. Juntos, crearán un ambiente lleno de armonía, donde el placer de compartir una buena comida y hacer sentir bien a los demás será una constante. Sin embargo, el anhelo de perfección que ambos comparten podría convertirse en una fuente de frustración si no logran alcanzar las expectativas que se imponen a sí mismos. A pesar de ello, esta pareja se comunicará con amor y resolverá cualquier problema con calma y sin discusiones, manteniendo siempre la armonía.'
      },
      {
        id: 136, numero1: 6, numero2: 7,
        descripcion: 'Ambos son personas tranquilas que valoran la estabilidad y huyen de los imprevistos y las situaciones caóticas. El 6 anhela demostraciones de amor y afecto, algo que podría no recibir del 7, quién es más metódico y vive en el mundo de las ideas, mostrando con dificultad sus sentimientos. Aun así, se acompañarán en los silencios, disfrutando de la paz de su hogar y la tranquilidad de su ser, aunque no expresen su amor de manera exuberante. Cada uno buscará su ideal de pareja: el 6 en lo emocional y el 7 en lo intelectual. Esta combinación les permitirá vivir momentos ordenados y armoniosos, libres de contratiempos.'
      },
      {
        id: 137, numero1: 6, numero2: 8,
        descripcion: 'Estos dos se complementan a la perfección. El 6 es amoroso, equilibrado y busca un amor que pueda admirar, mientras que el 8 ambiciona la seguridad económica para su familia, y hará todo lo posible para conseguirla. El 6 admirará profundamente este compromiso, mientras que el 8 se sentirá apoyado y querido, sin sentirse solo en su camino hacia el éxito. Sin embargo, el 8 puede ser celoso y posesivo, una actitud que inicialmente atraerá al 6, pero que con el tiempo podría hacerle sentir atrapado, especialmente porque el 6 disfruta de la vida social. A pesar de estos desafíos, la pareja experimentará momentos llenos de placer, viajes y cambios que enriquecerán su vida en común.'
      },
      {
        id: 138, numero1: 6, numero2: 9,
        descripcion: 'En esta relación, ambos encontrarán una combinación casi perfecta de amor, armonía, dedicación y atenciones, aunque cada uno lo enfoque de manera diferente. El 6 se dedicará por completo a su familia y su círculo cercano, mientras que el 9 se preocupará por llegar a otras personas que también necesiten su apoyo. Es posible que el 6 sienta, en ocasiones, que el 9 dedica demasiado tiempo a lo externo, pero esto se debe a que el 9 disfruta resolviendo problemas y ayudando a quienes cree que lo necesitan. Juntos, lograrán alcanzar sus aspiraciones de crear un hogar lleno de armonía y satisfacción, un lugar que ambos han soñado.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroSiete() {
    const compatibilidad = [
      {
        id: 139, numero1: 7, numero2: 7,
        descripcion: 'La pareja de 7 se fundamenta en un profundo análisis y reflexión; nada se deja al azar. Ambos poseen una capacidad extraordinaria para comprenderse mutuamente, lo que facilita una conexión profunda y enriquecedora. La necesidad de espacio y silencio para nutrir su esencia es algo que ambos respetan, lo que les permite, en muchos casos, entenderse sin necesidad de palabras, gracias a su bien desarrollado sentido de la percepción. La espiritualidad y el conocimiento en este ámbito juegan un papel crucial en su vínculo. A nivel físico, su relación es fuerte y satisfactoria, encontrando en los silencios y en el contacto una conexión excepcional.'
      },
      {
        id: 140, numero1: 7, numero2: 8,
        descripcion: 'Esta pareja presenta una interesante dinámica de contrastes. El 7 busca nutrir su mente y espíritu, prefiriendo la introspección y un ritmo pausado que le permita analizar cada situación con detenimiento. Desde la perspectiva del 8, esta actitud puede parecer demasiado lenta, ya que el 8 está impulsado por el deseo de alcanzar metas económicas y enfrentar grandes desafíos. Sin embargo, si ambos asumen sus roles dentro de la relación, podrán complementarse de manera que hagan su vida en común mucho más placentera. Esta pareja tiene el potencial de crear un ambiente familiar lleno de armonía y prosperidad.'
      },
      {
        id: 141, numero1: 7, numero2: 9,
        descripcion: 'La espiritualidad, la percepción y las conversaciones profundas sobre el crecimiento personal serán los pilares de esta relación. Ambos se entienden de manera casi telepática, gracias a la conexión de sus intelectos y percepciones. Es probable que el 9, con su curiosidad y capacidad para hablar sobre cualquier tema con confianza y sabiduría, sea quien lleve la voz cantante. El 7, por su parte, escuchará con atención y aprenderá mucho de su pareja. Aunque no sean muy demostrativos en cuanto a los afectos, su relación será intelectualmente estimulante.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroOcho() {
    const compatibilidad = [
      {
        id: 142, numero1: 8, numero2: 8,
        descripcion: 'Ambos 8 se caracterizan por su enorme fuerza y determinación, con un enfoque casi obsesivo en alcanzar sus metas, especialmente en lo económico y profesional. Ambos son incansables en su búsqueda del éxito, dispuestos a hacer lo que sea necesario para conseguirlo. Aunque las demostraciones de afecto pueden ser escasas, la pasión que comparten será intensa, sirviendo como un escape de la presión de sus responsabilidades. Son celosos y protectores, cuidándose mutuamente como si fueran su propiedad. Aunque sus ambiciones individuales los mantendrán ocupados, juntos vibran con la energía de un número 7, lo que les aporta una conexión espiritual que fortalece su relación.'
      },
      {
        id: 143, numero1: 8, numero2: 9,
        descripcion: 'Esta relación ofrece grandes oportunidades de progreso gracias a la tenacidad del 8 y su enfoque competitivo para alcanzar sus metas. El 9 complementa esta energía con su gran fortaleza espiritual, creando una combinación poderosa. Sin embargo, el 8 puede enfrentarse a desafíos debido a su naturaleza posesiva y celosa, mientras que el 9 es naturalmente sociable y disfruta de las interacciones enriquecedoras con los demás. A pesar de estas diferencias, ambos lograrán cumplir sus objetivos materiales, consolidando una relación sólida y próspera.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  private cargarNumeroNueve() {
    const compatibilidad = [
      {
        id: 144, numero1: 9, numero2: 9,
        descripcion: 'Esta pareja de 9 está unida por un fuerte compromiso con la armonía universal y un profundo interés por el bienestar del prójimo. Ambos disfrutan ayudando y aconsejando a los demás, lo que los convierte en excelentes maestros o instructores en cualquier disciplina que compartan. La relación entre ellos es una fuente inagotable de soluciones y equilibrio, donde todos los sentidos encuentran satisfacción. La música, en particular, juega un papel importante en su vínculo, no solo como algo que escuchan, sino como algo que sienten profundamente. La energía que los une se potencia gracias a las cualidades que cada uno aporta a la relación.'
      }
    ]
    this.cargarCompatibilidad(compatibilidad);
  }

  // Carga la informacion de compatibilidad al listado
  private cargarCompatibilidad(compatibilidad: Array<any>) {
    compatibilidad.forEach(element => {
      this.listadoCompatibilidad.push(element);
    });
  }

  // Retorna listado de compatibilidades
  public obtenerListadoCompatibilidad(): Array<Compatibilidad> {
    return this.listadoCompatibilidad;
  }
}
