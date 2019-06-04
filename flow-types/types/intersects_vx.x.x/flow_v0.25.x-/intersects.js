declare module "intersects" {
  declare export function boxBox(
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number,
    w2: number,
    h2: number
  ): boolean;

  declare export function boxCircle(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    xc: number,
    yc: number,
    rc: number
  ): boolean;

  declare export function boxEllipse(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
  ): boolean;

  declare export function boxLine(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function boxPoint(
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function boxPolygon(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    points: number[]
  ): boolean;

  declare export function circleBox(
    xc: number,
    yc: number,
    rc: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
  ): boolean;

  declare export function circleCircle(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number,
    r2: number
  ): boolean;

  declare export function circleEllipse(
    xc: number,
    yc: number,
    rc: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
  ): boolean;

  declare export function circleLine(
    xc: number,
    yc: number,
    rc: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function circlePoint(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function circlePolygon(
    xc: number,
    yc: number,
    rc: number,
    points: number[]
  ): boolean;

  declare export function ellipseBox(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
  ): boolean;

  declare export function ellipseCircle(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    xc: number,
    yc: number,
    rc: number
  ): boolean;

  declare export function ellipseEllipse(
    x1: number,
    y1: number,
    r1x: number,
    r1y: number,
    x2: number,
    y2: number,
    r2x: number,
    r2y: number
  ): boolean;

  declare export function ellipseLine(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function ellipsePoint(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    x1: number,
    y1: number
  ): boolean;

  declare export function ellipsePolygon(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    points: number[]
  ): boolean;

  declare export function lineBox(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
  ): boolean;

  declare export function lineCircle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xc: number,
    yc: number,
    rc: number
  ): boolean;

  declare export function lineEllipse(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
  ): boolean;

  declare export function lineLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): boolean;

  declare export function linePoint(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xp: number,
    yp: number,
    tolerance: number
  ): boolean;

  declare export function linePolygon(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    points: number[],
    tolerance: number
  ): boolean;

  declare export function pointBox(
    x1: number,
    y1: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
  ): boolean;

  declare export function pointCircle(
    x1: number,
    y1: number,
    xc: number,
    yc: number,
    rc: number
  ): boolean;

  declare export function pointEllipse(
    x1: number,
    y1: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
  ): boolean;

  declare export function pointLine(
    xp: number,
    yp: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean;

  declare export function pointPolygon(
    x1: number,
    y1: number,
    points: number[],
    tolerance: number
  ): boolean;

  declare export function polygonBox(
    points: number[],
    x: number,
    y: number,
    w: number,
    h: number
  ): boolean;

  declare export function polygonCircle(
    points: number[],
    xc: number,
    yc: number,
    rc: number
  ): boolean;

  declare export function polygonEllipse(
    points: number[],
    xe: number,
    ye: number,
    rex: number,
    rey: number
  ): boolean;

  declare export function polygonLine(
    points: number[],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tolerance: number
  ): boolean;

  declare export function polygonPoint(
    points: number[],
    x: number,
    y: number,
    tolerance: number
  ): boolean;

  declare export function polygonPolygon(
    points1: number[],
    points2: number[]
  ): boolean;
}
