declare module "gm" {
  declare function m(
    stream: NodeJS.ReadableStream | Buffer | string,
    image?: string
  ): m$State;

  declare function m(width: number, height: number, color?: string): m$State;

  declare var npm$namespace$m: {
    compare: typeof m$compare,
    subClass: typeof m$subClass
  };
  declare interface m$ClassOptions {
    imageMagick?: boolean;
    nativeAutoOrient?: boolean;
  }

  declare interface m$ChannelInfo<T> {
    Red: T;
    Green: T;
    Blue: T;
  }

  declare interface m$CompareOptions {
    file?: string;
    highlightColor?: string;
    highlightStyle?: m$HighlightStyle;
    tolerance?: number;
  }

  declare interface m$ColorStatistics {
    Minimum: string;
    Maximum: string;
    Mean: string;
    "Standard Deviation": string;
  }

  declare interface m$Dimensions {
    width: number;
    height: number;
  }

  declare interface m$GetterOptions {
    bufferStream?: boolean;
  }

  declare interface m$ImageInfo {
    "Background Color": string;
    "Border Color": string;
    "Channel Depths": m$ChannelInfo<string>;
    "Channel Statistics": m$ChannelInfo<m$ColorStatistics>;
    Class: string;
    color: number;
    Compose: string;
    Compression: string;
    depth: number;
    Depth: string;
    Dispose: string;
    Filesize: string;
    format: string;
    Format: string;
    Geometry: string;
    Interlace: string;
    Iterations: string;
    "JPEG-Quality"?: string;
    "JPEG-Colorspace"?: string;
    "JPEG-Colorspace-Name"?: string;
    "JPEG-Sampling-factors"?: string;
    "Matte Color": string;
    Orientation: string;
    "Page geometry": string;
    path: string;
    "Profile-color"?: string;
    "Profile-iptc"?: {
      [key: string]: string
    };
    "Profile-EXIF"?: {
      [key: string]: string
    };
    "Profile-XMP"?: string;
    Resolution?: string;
    size: m$Dimensions;
    Signature: string;
    Software: string;
    Tainted: string;
    Type: string;
  }

  declare interface m$State {
    adjoin(): m$State;
    affine(matrix: string): m$State;
    antialias(enable: boolean): m$State;
    append(image: string, ltr?: boolean): m$State;
    authenticate(password: string): m$State;
    autoOrient(): m$State;
    backdrop(): m$State;
    background(color: string): m$State;
    bitdepth(bits: number): m$State;
    blackThreshold(intensity: number): m$State;
    blackThreshold(
      red: number,
      green: number,
      blue: number,
      opacity?: number
    ): m$State;
    bluePrimary(x: number, y: number): m$State;
    blur(radius: number, sigma?: number): m$State;
    border(width: number, height: number): m$State;
    borderColor(color: string): m$State;
    box(color: string): m$State;
    channel(type: m$NamedColor | string): m$State;
    charcoal(factor: number): m$State;
    chop(width: number, height: number, x?: number, y?: number): m$State;
    clip(): m$State;
    coalesce(): m$State;
    colorize(red: number, green: number, blue: number): m$State;
    colorMap(type: "shared" | "private" | string): m$State;
    colors(colors: number): m$State;
    colorspace(space: m$ColorSpace | string): m$State;
    command(customCommand: string): m$State;
    compose(operator: m$ComposeOperator | string): m$State;
    compress(type: m$CompressionType | string): m$State;
    contrast(multiplier: number): m$State;
    convolve(kernel: string): m$State;
    createDirectories(): m$State;
    crop(
      width: number,
      height: number,
      x?: number,
      y?: number,
      percent?: boolean
    ): m$State;
    cycle(amount: number): m$State;
    deconstruct(): m$State;
    define(value: string): m$State;
    delay(milliseconds: number): m$State;
    density(width: number, height: number): m$State;
    despeckle(): m$State;
    displace(horizontal: number, vertical: number): m$State;
    display(xServer: string): m$State;
    dispose(method: m$DisposeMethod | string): m$State;
    dissolve(percent: number): m$State;
    dither(enable?: boolean): m$State;
    edge(radius?: number): m$State;
    emboss(radius?: number): m$State;
    encoding(encoding: m$Encoding | string): m$State;
    endian(type: m$EndianType | string): m$State;
    enhance(): m$State;
    equalize(): m$State;
    extent(width: number, height: number, options?: string): m$State;
    file(filename: string): m$State;
    filter(type: m$FilterType | string): m$State;
    flatten(): m$State;
    flip(): m$State;
    flop(): m$State;
    foreground(color: string): m$State;
    frame(
      width: number,
      height: number,
      outerBevelWidth: number,
      outBevelHeight: number
    ): m$State;
    fuzz(distance: number, percent?: boolean): m$State;
    gamma(r: number, g: number, b: number): m$State;
    gaussian(radius: number, sigma?: number): m$State;
    geometry(width: number, height?: number, option?: m$ResizeOption): m$State;
    geometry(geometry: string): m$State;
    greenPrimary(x: number, y: number): m$State;
    gravity(direction: m$GravityDirection | string): m$State;
    highlightColor(color: string): m$State;
    highlightStyle(style: m$HighlightStyle | string): m$State;
    iconGeometry(geometry: string): m$State;
    implode(factor?: number): m$State;
    in(...customArguments: string[]): m$State;
    intent(type: m$IntentType | string): m$State;
    interlace(type: m$InterlaceType | string): m$State;
    label(name: string): m$State;
    lat(
      width: number,
      height: number,
      offset: number,
      percent?: boolean
    ): m$State;
    level(
      blackPoint: number,
      gamma: number,
      whitePoint: number,
      percent?: boolean
    ): m$State;
    limit(type: m$LimitType | string, val: string): m$State;
    list(type: m$ListType | string): m$State;
    log(format: string): m$State;
    loop(iterations: number): m$State;
    lower(width: number, height: number): m$State;
    magnify(factor: number): m$State;
    map(filename: string): m$State;
    mask(filename: string): m$State;
    matte(): m$State;
    matteColor(color: string): m$State;
    maximumError(limit: number): m$State;
    median(radius?: number): m$State;
    minify(factor: number): m$State;
    mode(mode: m$OperationMode | string): m$State;
    modulate(b: number, s: number, h: number): m$State;
    monitor(): m$State;
    monochrome(): m$State;
    morph(
      otherImg: string | string[],
      outName: string,
      callback?: m$WriteCallback
    ): m$State;
    mosaic(): m$State;
    motionBlur(radius: number, sigma?: number, angle?: number): m$State;
    name(): m$State;
    negative(): m$State;
    noise(type: m$NoiseType | string | number): m$State;
    noop(): m$State;
    normalize(): m$State;
    opaque(color: string): m$State;
    operator(
      channel: string,
      operator: m$ChannelOperator | string,
      rvalue: number,
      percent?: boolean
    ): m$State;
    orderedDither(channelType: m$ChannelType | string, NxN: string): m$State;
    out(...customArguments: string[]): m$State;
    outputDirectory(directory: string): m$State;
    page(
      width: number,
      height: number,
      arg?: "%" | "!" | "<" | ">" | string
    ): m$State;
    pause(seconds: number): m$State;
    pen(color: string): m$State;
    ping(): m$State;
    pointSize(size: number): m$State;
    noProfile(): m$State;
    preview(type: m$PreviewType | string): m$State;
    paint(radius: number): m$State;
    process(command: string): m$State;
    profile(filename: string): m$State;
    progress(): m$State;
    randomThreshold(channelType: m$ChannelType, LOWxHIGH: string): m$State;
    quality(level: number): m$State;
    raise(width: number, height: number): m$State;
    recolor(matrix: string): m$State;
    redPrimary(x: number, y: number): m$State;
    region(width: number, height: number, x?: number, y?: number): m$State;
    remote(): m$State;
    render(): m$State;
    repage(reset: "+" | string): m$State;
    repage(
      width: number,
      height: number,
      xoff: number,
      yoff: number,
      arg?: string
    ): m$State;
    sample(geometry: string): m$State;
    samplingFactor(horizontalFactor: number, verticalFactor: number): m$State;
    rawSize(width: number, height: number, offset?: number): m$State;
    resample(horizontal: number, vertical: number): m$State;
    resize(width: number, height: number, option: m$ResizeOption): m$State;
    resize(width: number, height?: number, option?: m$ResizeOption): m$State;
    roll(horizontal: number, vertical: number): m$State;
    rotate(backgroundColor: string, degrees: number): m$State;
    scene(index: number): m$State;
    scenes(start: number, end: number): m$State;
    scale(width: number, height: number): m$State;
    screen(): m$State;
    segment(clustherThreshold: number, smoothingThreshold: number): m$State;
    sepia(): m$State;
    set(attribute: string, value: string): m$State;
    setFormat(format: string): m$State;
    shade(azimuth: number, elevation: number): m$State;
    shadow(radius: number, sigma?: number): m$State;
    sharedMemory(): m$State;
    shave(width: number, height: number, percent?: boolean): m$State;
    sharpen(radius: number, sigma?: number): m$State;
    shear(xDegrees: number, yDegress: number): m$State;
    silent(): m$State;
    snaps(count: number): m$State;
    solarize(threshold: number): m$State;
    spread(amount: number): m$State;
    stegano(offset: number): m$State;
    stereo(): m$State;
    strip(): m$State;
    swirl(degrees: number): m$State;
    textFont(font: string): m$State;
    threshold(value: number, percent?: boolean): m$State;
    thumb(
      width: number,
      height: number,
      outName: string,
      callback: m$WriteCallback
    ): m$State;
    thumb(
      width: number,
      height: number,
      outName: string,
      quality: number,
      callback: m$WriteCallback
    ): m$State;
    thumb(
      width: number,
      height: number,
      outName: string,
      quality: number,
      align: "topleft" | "center" | string,
      callback: m$WriteCallback
    ): m$State;
    tile(filename: string): m$State;
    title(title: string): m$State;
    transform(color: string): m$State;
    transparent(color: string): m$State;
    treeDepth(depth: number): m$State;
    trim(): m$State;
    type(type: m$ImageType | string): m$State;
    update(seconds: number): m$State;
    units(type: m$UnitType | string): m$State;
    unsharp(
      radius: number,
      sigma?: number,
      amount?: number,
      threshold?: number
    ): m$State;
    usePixmap(): m$State;
    view(): m$State;
    virtualPixel(method: m$VirtualPixelMethod | string): m$State;
    visual(type: m$VisualType | string): m$State;
    watermark(brightness: number, saturation: number): m$State;
    wave(amplitude: number, wavelength: number): m$State;
    whitePoint(x: number, y: number): m$State;
    whiteThreshold(intensity: number): m$State;
    whiteThreshold(
      red: number,
      green: number,
      blue: number,
      opacity?: number
    ): m$State;
    window(id: string): m$State;
    windowGroup(): m$State;
    color(callback: m$GetterCallback<number>): m$State;
    color(opts: m$GetterOptions, callback: m$GetterCallback<number>): m$State;
    depth(callback: m$GetterCallback<number>): m$State;
    depth(opts: m$GetterOptions, callback: m$GetterCallback<number>): m$State;
    filesize(callback: m$GetterCallback<string>): m$State;
    filesize(
      opts: m$GetterOptions,
      callback: m$GetterCallback<string>
    ): m$State;
    format(callback: m$GetterCallback<string>): m$State;
    format(opts: m$GetterOptions, callback: m$GetterCallback<string>): m$State;
    identify(callback: m$GetterCallback<m$ImageInfo>): m$State;
    identify(
      opts: m$GetterOptions,
      callback: m$GetterCallback<m$ImageInfo>
    ): m$State;
    res(callback: m$GetterCallback<string>): m$State;
    res(opts: m$GetterOptions, callback: m$GetterCallback<string>): m$State;
    size(callback: m$GetterCallback<m$Dimensions>): m$State;
    size(
      opts: m$GetterOptions,
      callback: m$GetterCallback<m$Dimensions>
    ): m$State;
    orientation(callback: m$GetterCallback<string>): m$State;
    orientation(
      opts: m$GetterOptions,
      callback: m$GetterCallback<string>
    ): m$State;
    draw(args: string): m$State;
    drawArc(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      r0: number,
      r1: number
    ): m$State;
    drawBezier(
      coord0: [number, number],
      coord1: [number, number],
      ...coords: Array<[number, number]>
    ): m$State;
    drawCircle(x0: number, y0: number, x1: number, y1: number): m$State;
    drawEllipse(
      x0: number,
      y0: number,
      rx: number,
      ry: number,
      a0: number,
      a1: number
    ): m$State;
    drawLine(x0: number, y0: number, x1: number, y1: number): m$State;
    drawPoint(x: number, y: number): m$State;
    drawPolygon(
      coord0: [number, number],
      coord1: [number, number],
      coord2: [number, number],
      ...coords: Array<[number, number]>
    ): m$State;
    drawPolyline(
      coord0: [number, number],
      coord1: [number, number],
      coord2: [number, number],
      ...coords: Array<[number, number]>
    ): m$State;
    drawRectangle(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      wc?: number,
      hc?: number
    ): m$State;
    drawText(
      x: number,
      y: number,
      text: string,
      gravity?: m$GravityDirection | string
    ): m$State;
    fill(color: string): m$State;
    font(name: string, size?: number): m$State;
    fontSize(size: number): m$State;
    stroke(color: string, width?: number): m$State;
    strokeWidth(width: number): m$State;
    setDraw(
      property: m$SetDrawProperty | string,
      x: number,
      y: number,
      method: m$SetDrawMethod | string
    ): m$State;
    stream(callback?: m$WriteCallback): stream.PassThrough;
    stream(format: string, callback?: m$WriteCallback): stream.PassThrough;
    toBuffer(callback: (err: Error, buffer: Buffer) => any): stream.PassThrough;
    toBuffer(
      format: string,
      callback: (err: Error, buffer: Buffer) => any
    ): stream.PassThrough;
    write(filename: string, callback: m$WriteCallback): void;
  }

  declare interface m$SubClass {
    (image: string): m$State;
    (stream: NodeJS.ReadableStream | Buffer, image?: string): m$State;
    (width: number, height: number, color?: string): m$State;
  }

  declare function m$compare(
    filename1: string,
    filename2: string,
    callback: m$CompareCallback
  ): void;

  declare function m$compare(
    filename1: string,
    filename2: string,
    options: m$CompareOptions | number,
    callback: m$CompareCallback
  ): void;

  declare function m$subClass(options: m$ClassOptions): m$SubClass;

  declare type m$ChannelOperator =
    | "Add"
    | "And"
    | "Assign"
    | "Depth"
    | "Divide"
    | "Gamma"
    | "Negate"
    | "LShift"
    | "Log"
    | "Max"
    | "Min"
    | "Multiply"
    | "Or"
    | "Pow"
    | "RShift"
    | "Subtract"
    | "Threshold"
    | "Threshold-White"
    | "Threshold-White-Negate"
    | "Threshold-Black"
    | "Threshold-Black-Negate"
    | "Xor"
    | "Noise-Gaussian"
    | "Noise-Impulse"
    | "Noise-Laplacian"
    | "Noise-Multiplicative"
    | "Noise-Poisson"
    | "Noise-Random"
    | "Noise-Uniform";

  declare type m$ChannelType =
    | "All"
    | "Intensity"
    | "Red"
    | "Green"
    | "Blue"
    | "Cyan"
    | "Magenta"
    | "Yellow"
    | "Black"
    | "Opacity";

  declare type m$ColorSpace =
    | "CineonLog"
    | "CMYK"
    | "GRAY"
    | "HSL"
    | "HSB"
    | "OHTA"
    | "RGB"
    | "Rec601Luma"
    | "Rec709Luma"
    | "Rec601YCbCr"
    | "Rec709YCbCr"
    | "Transparent"
    | "XYZ"
    | "YCbCr"
    | "YIQ"
    | "YPbPr"
    | "YUV";

  declare type m$CompareCallback = (
    err: Error,
    isEqual: boolean,
    equality: number,
    raw: number
  ) => any;

  declare type m$ComposeOperator =
    | "Over"
    | "In"
    | "Out"
    | "Atop"
    | "Xor"
    | "Plus"
    | "Minus"
    | "Add"
    | "Subtract"
    | "Difference"
    | "Divide"
    | "Multiply"
    | "Bumpmap"
    | "Copy"
    | "CopyRed"
    | "CopyGreen"
    | "CopyBlue"
    | "CopyOpacity"
    | "CopyCyan"
    | "CopyMagenta"
    | "CopyYellow"
    | "CopyBlack";

  declare type m$CompressionType =
    | "None"
    | "BZip"
    | "Fax"
    | "Group4"
    | "JPEG"
    | "Lossless"
    | "LZW"
    | "RLE"
    | "Zip"
    | "LZMA";

  declare type m$DisposeMethod =
    | "Undefined"
    | "None"
    | "Background"
    | "Previous";

  declare type m$Encoding =
    | "AdobeCustom"
    | "AdobeExpert"
    | "AdobeStandard"
    | "AppleRoman"
    | "BIG5"
    | "GB2312"
    | "Latin 2"
    | "None"
    | "SJIScode"
    | "Symbol"
    | "Unicode"
    | "Wansung";

  declare type m$EndianType = "MSB" | "LSB" | "Native";

  declare type m$FilterType =
    | "Point"
    | "Box"
    | "Triangle"
    | "Hermite"
    | "Hanning"
    | "Hamming"
    | "Blackman"
    | "Gaussian"
    | "Quadratic"
    | "Cubic"
    | "Catrom"
    | "Mitchell"
    | "Lanczos"
    | "Bessel"
    | "Sinc";

  declare type m$GetterCallback<T> = (err: Error, value: T) => any;

  declare type m$GravityDirection =
    | "NorthWest"
    | "North"
    | "NorthEast"
    | "West"
    | "Center"
    | "East"
    | "SouthWest"
    | "South"
    | "SouthEast";

  declare type m$HighlightStyle = "Assign" | "Threshold" | "Tint" | "XOR";

  declare type m$ImageType =
    | "Bilevel"
    | "Grayscale"
    | "Palette"
    | "PaletteMatte"
    | "TrueColor"
    | "TrueColorMatte"
    | "ColorSeparation"
    | "ColorSeparationMatte"
    | "Optimize";

  declare type m$IntentType =
    | "Absolute"
    | "Perceptual"
    | "Relative"
    | "Saturation";

  declare type m$InterlaceType = "None" | "Line" | "Plane" | "Partition";

  declare type m$LimitType =
    | "disk"
    | "file"
    | "map"
    | "memory"
    | "pixels"
    | "threads";

  declare type m$ListType =
    | "Color"
    | "Delegate"
    | "Format"
    | "Magic"
    | "Module"
    | "Resource"
    | "Type";

  declare type m$NamedColor =
    | "Red"
    | "Green"
    | "Blue"
    | "Opacity"
    | "Matte"
    | "Cyan"
    | "Magenta"
    | "Yellow"
    | "Black"
    | "Gray";

  declare type m$NoiseType =
    | "uniform"
    | "gaussian"
    | "multiplicative"
    | "impulse"
    | "laplacian"
    | "poisson";

  declare type m$OperationMode = "frame" | "unframe" | "concatenate";

  declare type m$PreviewType =
    | "Rotate"
    | "Shear"
    | "Roll"
    | "Hue"
    | "Saturation"
    | "Brightness"
    | "Gamma"
    | "Spiff"
    | "Dull"
    | "Grayscale"
    | "Quantize"
    | "Despeckle"
    | "ReduceNoise"
    | "AddNoise"
    | "Sharpen"
    | "Blur"
    | "Threshold"
    | "EdgeDetect"
    | "Spread"
    | "Shade"
    | "Raise"
    | "Segment"
    | "Solarize"
    | "Swirl"
    | "Implode"
    | "Wave"
    | "OilPaint"
    | "CharcoalDrawing"
    | "JPEG";

  declare type m$ResizeOption = "%" | "@" | "!" | "^" | "<" | ">";

  declare type m$SetDrawMethod =
    | "point"
    | "replace"
    | "floodfill"
    | "filltoborder"
    | "reset";

  declare type m$SetDrawProperty = "color" | "matte";

  declare type m$UnitType =
    | "Undefined"
    | "PixelsPerInch"
    | "PixelsPerCentimeter";

  declare type m$VirtualPixelMethod = "Constant" | "Edge" | "Mirror" | "Tile";

  declare type m$VisualType =
    | "StaticGray"
    | "GrayScale"
    | "StaticColor"
    | "PseudoColor"
    | "TrueColor"
    | "DirectColor"
    | "default";

  declare type m$WriteCallback = (
    err: Error,
    stdout: string,
    stderr: string,
    cmd: string
  ) => any;
  declare export default typeof m;
}
