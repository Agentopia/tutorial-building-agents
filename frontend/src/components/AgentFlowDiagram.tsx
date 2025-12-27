'use client'

import { useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position
} from 'reactflow'
import 'reactflow/dist/style.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Info } from 'lucide-react'

interface AgentNode {
  id: string
  label: string
  description?: string
  type?: 'input' | 'default' | 'output'
  position: { x: number; y: number }
}

interface AgentEdge {
  id: string
  source: string
  target: string
  label?: string
  animated?: boolean
}

interface AgentFlowDiagramProps {
  title: string
  description?: string
  nodes: AgentNode[]
  edges: AgentEdge[]
  height?: number
}

export default function AgentFlowDiagram({
  title,
  description,
  nodes: initialNodes,
  edges: initialEdges,
  height = 400
}: AgentFlowDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<AgentNode | null>(null)

  // Convert custom nodes to React Flow nodes
  const reactFlowNodes: Node[] = initialNodes.map((node) => ({
    id: node.id,
    type: node.type || 'default',
    position: node.position,
    data: {
      label: (
        <div className="px-4 py-2 text-center">
          <div className="font-semibold text-sm">{node.label}</div>
        </div>
      )
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      background: 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(6, 182, 212) 100%)',
      color: 'white',
      border: '2px solid rgb(79, 70, 229)',
      borderRadius: '12px',
      padding: '10px',
      fontSize: '12px',
      fontWeight: 600,
      minWidth: '120px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  }))

  // Convert custom edges to React Flow edges
  const reactFlowEdges: Edge[] = initialEdges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    animated: edge.animated !== false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: 'rgb(99, 102, 241)'
    },
    style: {
      stroke: 'rgb(99, 102, 241)',
      strokeWidth: 2
    },
    labelStyle: {
      fill: 'rgb(71, 85, 105)',
      fontSize: 11,
      fontWeight: 500
    },
    labelBgStyle: {
      fill: 'white',
      fillOpacity: 0.9
    }
  }))

  const [nodes] = useNodesState(reactFlowNodes)
  const [edges] = useEdgesState(reactFlowEdges)

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const originalNode = initialNodes.find(n => n.id === node.id)
    if (originalNode) {
      setSelectedNode(originalNode)
    }
  }, [initialNodes])

  return (
    <div className="my-8">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      {/* Flow Diagram */}
      <div
        className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
        style={{ height }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        >
          <Background color="#6366f1" gap={16} size={1} />
          <Controls className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg" />
          <MiniMap
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
            nodeColor={() => 'rgb(99, 102, 241)'}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>
      </div>

      {/* Node Details Modal */}
      <AnimatePresence>
        {selectedNode && selectedNode.description && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {selectedNode.label}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Component Details
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedNode.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg text-sm text-blue-800 dark:text-blue-200">
        💡 <strong>Tip:</strong> Click on nodes to see detailed explanations. Use the controls to zoom and pan around the diagram.
      </div>
    </div>
  )
}
