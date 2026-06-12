import styles from './OrgChart.module.css'

const W = 160  // default node width
const H = 56   // default node height
const AW = 8   // arrowhead width
const AH = 8   // arrowhead height

function Node({ x, y, role, name, w = W, h = H }) {
  return (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={h} rx={8} className={styles.box} />
      <text x={x} y={y + 16} textAnchor="middle" className={styles.roleText}>{role}</text>
      {name.split(' / ').map((line, i) => (
        <text key={i} x={x} y={y + 32 + i * 16} textAnchor="middle" className={styles.nameText}>{line}</text>
      ))}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  const my = (y1 + y2) / 2
  return (
    <g>
      <polyline
        points={`${x1},${y1} ${x1},${my} ${x2},${my} ${x2},${y2 - AH}`}
        className={styles.line}
      />
      <polygon
        points={`${x2},${y2} ${x2 - AW / 2},${y2 - AH} ${x2 + AW / 2},${y2 - AH}`}
        className={styles.arrow}
      />
    </g>
  )
}

export default function OrgChart() {
  const SVG_W = 1100
  const SVG_H = 700

  // Row Y positions (top of node)
  const r0y = 40    // CEO
  const r1y = 160   // Admin, Marketing
  const r2y = 280   // Isabel Payupay
  const r3y = 400   // NOC, Wireless, Power2Connect, OSP
  const r4y = 530   // Kayclyn, CAD Operator

  // X positions
  const ceoX    = 550
  const adminX  = 460
  const mktX    = 660
  const isabelX = 460
  const nocX    = 140
  const wirX    = 360
  const p2cX    = 580
  const ospX    = 860
  const kayX    = 360
  const cadX    = 860

  // Wide nodes
  const KAY_W = 240
  const KAY_H = 72
  const CAD_W = 220
  const CAD_H = 72

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Company Organizational Chart</h2>
      <div className={styles.scroll}>
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className={styles.svg}>

          {/* CEO → Admin */}
          <Arrow x1={ceoX} y1={r0y + H} x2={adminX} y2={r1y} />
          {/* CEO → Marketing */}
          <Arrow x1={ceoX} y1={r0y + H} x2={mktX} y2={r1y} />

          {/* Admin → Isabel */}
          <Arrow x1={adminX} y1={r1y + H} x2={isabelX} y2={r2y} />

          {/* CEO → bottom row */}
          {[nocX, wirX, p2cX, ospX].map(x => (
            <Arrow key={x} x1={ceoX} y1={r0y + H} x2={x} y2={r3y} />
          ))}

          {/* Wireless → Kayclyn */}
          <Arrow x1={wirX} y1={r3y + H} x2={kayX} y2={r4y} />
          {/* OSP → CAD */}
          <Arrow x1={ospX} y1={r3y + H} x2={cadX} y2={r4y} />

          {/* Nodes */}
          <Node x={ceoX}    y={r0y}  role="Chairman / CEO"                        name="Edwin L. Ferreras" />
          <Node x={adminX}  y={r1y}  role="Admin"                                  name="Jona Mae Acopio" />
          <Node x={mktX}    y={r1y}  role="Marketing"                              name="Jamil Dia" />
          <Node x={isabelX} y={r2y}  role="Admin Assistant"                        name="Isabel Payupay" />
          <Node x={nocX}    y={r3y}  role="NOC Head"                               name="Engr. Alvin Encinares" />
          <Node x={wirX}    y={r3y}  role="Wireless Head"                          name="Engr. Ronnie Quinones" />
          <Node x={p2cX}    y={r3y}  role="Power2Connect"                          name="Engr. Crizaldy Cruz" />
          <Node x={ospX}    y={r3y}  role="OSP Head"                               name="Rafael Villegas" />
          <Node x={kayX}    y={r4y}  role="Internal / External Compliance Officer" name="Kayclyn Dela Cruz"                         w={KAY_W} h={KAY_H} />
          <Node x={cadX}    y={r4y}  role="CAD Operator"                           name="Patrick C. Palamo / Anna B. Torrano"        w={CAD_W} h={CAD_H} />

        </svg>
      </div>
    </div>
  )
}
