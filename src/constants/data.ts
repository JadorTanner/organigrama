import {Edge, MarkerType, Node, Position} from "reactflow";

const bottomNodes: Node[] = [{
    id: '12',
    type: "CustomNode",
    position: {x: 0, y: 850},
    data: {

        label: 'DIRECCIÓN DE TRANSITO Y TRANSPORTE PUBLICO'
    },
    zIndex: 11,
},
    {
        id: '13',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE OBRAS MUNICIPALES'
        },
        zIndex: 11,
    },
    {
        id: '14',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE DESARROLLO COMUNITARIO'
        },

    },
    {
        id: '15',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE ADMINISTRACIÓN Y FINANZAS'
        },

    },
    {
        id: '16',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE SALUD'
        },
    },
    {
        id: '17', type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE ADMINISTRACIÓN DE EDUCACIÓN MUNICIPAL'
        },

    },
    {
        id: '18',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE PROTECCIÓN Y MEDIO AMBIENTE'
        },

    },
    {
        id: '19',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN OPERATIVA DE MANTENCIONES INTERNAS'
        },

    },
    {
        id: '20',
        type: "CustomNode",
        position: {x: 0, y: 850},
        data: {

            label: 'DIRECCIÓN DE SEGURIDAD PUBLICA Y CIUDADANA'
        },

    },
]

export const initialNodes: Node[] = [
    {
        id: '1',
        position: {x: 400, y: 0},
        data: {

            label: 'ALCALDE',
            hasSources: true
        },
        type: 'CustomNode',
    },
    {
        id: '2', type: "CustomNode",
        position: {x: 0, y: 100},
        data: {

            label: 'CONCEJO MUNICIPAL'
        },
        targetPosition: Position.Right
    },
    {
        id: '3', type: "CustomNode",
        position: {x: 0, y: 230},
        data: {

            label: 'CONSEJO DE SEGURIDAD PUBLICA'
        },
        targetPosition: Position.Right
    },
    {
        id: '4', type: "CustomNode",
        position: {x: 0, y: 360},
        data: {

            label: 'CONSEJO ORG. SOC. CIVIL'
        },
        targetPosition: Position.Right
    },
    {
        id: '5', type: "CustomNode",
        position: {x: 0, y: 490},
        data: {

            label: 'ADMINISTRACIÓN MUNICIPAL'
        },
        targetPosition: Position.Right
    },
    {
        id: '6', type: "CustomNode",
        position: {x: 0, y: 620},
        data: {

            label: 'JUZGADO POLICIA LOCAL'
        },
        targetPosition: Position.Right
    },
    {
        id: '7', type: "CustomNode",
        parentId: "11",
        zIndex: 11,
        position: {x: 0, y: 0},
        data: {

            label: 'DIRECCIÓN JURIDICA'
        },
        targetPosition: Position.Left
    },
    {
        id: '8', type: "CustomNode",
        parentId: "11",
        zIndex: 11,
        position: {x: 0, y: 130},
        data: {

            label: 'DIRECCIÓN DE CONTROL'
        },
        targetPosition: Position.Left
    },
    {
        id: '9', type: "CustomNode",
        parentId: "11",
        zIndex: 11,
        position: {x: 0, y: 260},
        data: {

            label: 'SECRETARIA MUNICIPAL'
        },
        targetPosition: Position.Left
    },
    {
        id: '10', type: "CustomNode",
        parentId: "11",
        zIndex: 11,
        position: {x: 0, y: 390},
        data: {

            label: 'SECRETARIA DE PLANIFICACIÓN'
        },
        targetPosition: Position.Left
    },
    {
        id: '11',
        position: {x: 800, y: 100},
        type: "CustomGroup",
        selectable: false,
        data: {
            label: 'UNIDADES ASESORAS',
            childrenCount: 4,
            textDirection: 'right'
        },
    },
    ...bottomNodes.map((n, i) => ({...n, position: {x: -500 + 250 * i, y: 800}})),
    {
        id: '21',
        type: "CustomNode",
        position: {x: 125, y: 930},
        data: {

            label: 'CEMENTERIO MUNICIPAL'
        },
    },
    {
        id: '22', type: "CustomNode",
        position: {x: 1500, y: 930},
        data: {

            label: 'DELEGACIÓN MUNICIPAL DE CURIMÓN'
        },
        targetPosition: Position.Right
    },

    {
        id: '23',
        position: {x: -500, y: 800},
        type: "CustomGroup",
        data: {
            label: 'DIRECCIONES',
            childrenCount: 1,
            textDirection: 'left'
        },
        zIndex: 10,
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-5',
        source: '1',
        target: '5',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-6',
        source: '1',
        target: '6',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-7',
        source: '1',
        target: '7',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-8',
        source: '1',
        target: '8',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-9',
        source: '1',
        target: '9',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    {
        id: 'e1-10',
        source: '1',
        target: '10',
        type: 'smoothstep',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom"
    },
    ...bottomNodes.map((n) => ({
        id: `e1-${n.id}`,
        source: '1',
        target: `${n.id}`,
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom",
        type: 'CustomEdge',
        data: {

            midpoints: [
                {x: 512, y: 750},
            ], type: 'smoothstep'
        },
    })),
    {
        id: 'e1-21',
        source: '1',
        target: '21',
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20},
        sourceHandle: "handleBottom",
        type: 'CustomEdge',
        data: {

            midpoints: [
                {x: 512, y: 620},
            ], type: 'smoothstep'
        },
    },
    {
        id: 'e1-22',
        source: '1',
        target: '22',
        sourceHandle: 'handleRight',
        type: 'CustomEdge',
        data: {

            type: 'smoothstep'
        },
        markerEnd: {type: MarkerType.ArrowClosed, color: "black", height: 20, width: 20}
    },
];