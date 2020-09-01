// import {Sunburst, Hint} from 'react-vis';
// import React from 'react'
//
//
//
// const myData = {
//  "title": "analytics",
//  "color": "#12939A",
//  "children": [
//   {
//    "title": "cluster",
//    "children": [
//     {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
//     {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
//     {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
//     {"title": "MergeEdge", "color": "#12939A", "size": 743}
//    ]
//   },
//   {
//    "title": "graph",
//    "children": [
//     {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
//     {"title": "LinkDistance", "color": "#12939A", "size": 5731},
//     {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
//     {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
//     {"title": "SpanningTree", "color": "#12939A", "size": 3416}
//    ]
//   },
//   {
//    "title": "optimization",
//    "children": [
//     {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
//    ]
//   }
//  ]
// }
//
//
// export default function Vis() {
//
//   return (
//     <>
//     <Sunburst
//   hideRootNode
//   colorType="literal"
//   data={myData}
//   height={400}
//   width={350}>
// </Sunburst>
//   </>
//   );
// }
//

import React from 'react';
import {RadialChart} from 'react-vis';

//http://uber.github.io/react-vis/documentation/other-charts/radial-chart

const myData = [
  {angle: 8, radius: 10, label: 'Adams'},
  {angle: 2, radius: 10, label: 'Cabot'},
  {angle: 1, radius: 10, label: 'Currier'},
  {angle: 1, radius: 10, label: 'Dunster'},
  {angle: 4, radius: 10, label: 'Eliot'},
  {angle: 1, radius: 10, label: 'Kirkland'},
  {angle: 3, radius: 10, label: 'Leverett'},
  {angle: 6, radius: 10, label: 'Lowell'},
  {angle: 1, radius: 10, label: 'Mather'},
  {angle: 1, radius: 10, label: 'Pforzheimer'},
  {angle: 2, radius: 10, label: 'Quincy'},
  {angle: 2, radius: 10, label: 'Winthrop'},];

export default function Visual() {

  return (
    <>
    <RadialChart
  data={myData}
  showLabels={true}
  width={1440}
  height={500}
  margin={{left: 1000, right: 40, top: 40, bottom: 40}}
  labelsStyle={{
          fontSize: 15,
          textColor: "white",
          fontFamily: "Arial",
          fontWeight: "bold",
          letterSpacing: 0.4
        }} />
  </>
  );
}
