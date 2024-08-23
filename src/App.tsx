import React, {useEffect, useState} from 'react';
import ReactFlow, {ConnectionLineType, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomEdge from "./components/CustomEdge.tsx";
import CustomNode from "./components/CustomNode.tsx";
import CustomGroup from "./components/CustomGroup.tsx";
import {initialEdges, initialNodes} from "./constants/data.ts";
import Modal from "./components/Modal.tsx";

const nodeTypes = {
    CustomNode: CustomNode,
    CustomGroup: CustomGroup
}

const edgeTypes = {
    CustomEdge: CustomEdge
};

const App: React.FC = () => {
    const [nodes, _setNodes, onNodesChange] = useNodesState([...initialNodes]);
    const [edges, _setEdges, onEdgesChange] = useEdgesState([...initialEdges]);
    const [showModal, setShowMdal] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [modalTitle, setModalTitle] = useState<string | undefined>(undefined)

    const fetchData = async () => {
        const response = await (await fetch('/data.json')).json()

        _setNodes((nds) => {
            return nds.map((n) => {
                if (n.type !== 'CustomGroup') {
                    n.data.info = response[`node-${n.id}`].info
                }
                return n;
            })
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodes={nodes.map((n) => ({...n, deletable: false, selectable: false, draggable: false}))}
                edges={edges.map((e) => ({
                    ...e,
                    deletable: false,
                    selectable: false,
                    draggable: false,
                }))}
                defaultEdgeOptions={{
                    className: "stroke-black",
                    style: {
                        stroke: "black"
                    }
                }}
                edgeTypes={edgeTypes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={(_, node) => {
                    if (node.type === 'CustomGroup') return
                    setModalInfo(node.data.info)
                    setShowMdal(true)
                    setModalTitle(node.data.label ? node.data.label : undefined)
                }}
                defaultViewport={{
                    x: 350,
                    y: 100,
                    zoom: 0.1
                }}
                connectionLineType={ConnectionLineType.SmoothStep}
            />
            {showModal && (<Modal info={modalInfo} title={modalTitle} closeModal={() => {
                setShowMdal(false)
                setModalInfo('')
                setModalTitle(undefined)
            }}/>)}
        </div>
    );
};

export default App;