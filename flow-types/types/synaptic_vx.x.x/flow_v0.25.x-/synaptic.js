declare module "global" {
  declare var Neuron: typeof Synaptic.Neuron;
  declare var Layer: typeof Synaptic.Layer;
  declare var Network: typeof Synaptic.Network;
  declare var Architect: typeof Synaptic.Architect;
  declare var Trainer: typeof Synaptic.Trainer;
}
declare module "synaptic" {
  import typeof * as Synaptic from "synaptic";

  declare var npm$namespace$Neuron: {
    connection: typeof Neuron$connection,

    Connection: typeof Neuron$Connection,
    squash: typeof npm$namespace$Neuron$squash
  };
  declare type Neuron$SquashingFunction = (
    x: number,
    derivate: boolean
  ) => number;

  declare var npm$namespace$Neuron$squash: {
    LOGISTIC: typeof Neuron$squash$LOGISTIC,
    TANH: typeof Neuron$squash$TANH,
    IDENTITY: typeof Neuron$squash$IDENTITY,
    HLIM: typeof Neuron$squash$HLIM,
    ReLU: typeof Neuron$squash$ReLU
  };
  declare var Neuron$squash$LOGISTIC: Neuron$SquashingFunction;

  declare var Neuron$squash$TANH: Neuron$SquashingFunction;

  declare var Neuron$squash$IDENTITY: Neuron$SquashingFunction;

  declare var Neuron$squash$HLIM: Neuron$SquashingFunction;

  declare var Neuron$squash$ReLU: Neuron$SquashingFunction;

  declare class Neuron$Connection {
    ID: number;
    from: number;
    to: number;
    weight: number;
    gain: number;
    gater: Neuron;
    constructor(from: number, to: number, weight?: number): this;
    static uid(): number;
  }

  declare var Neuron$connection: typeof Connection;

  /**
   * Neurons are the basic unit of the neural network. They can be connected together, or used to gate connections between other neurons.
   */
  declare export class Neuron {
    /**
     * By default, a neuron uses a Logistic Sigmoid as its squashing/activation function.
     * @default LOGISTIC
     */
    Neuron$squash: Neuron$SquashingFunction;

    /**
     * By default, a neuron uses a random bias.
     * @default random
     */
    bias: number;

    /**
     * Neurons are the basic unit of the neural network. They can be connected together, or used to gate connections between other neurons.
     */
    constructor(): this;

    /**
     * A neuron can project a connection to another neuron. Neurons can also self-connect.
     */
    project(neuron: Neuron, weight?: number): Neuron$Connection;

    /**
     * A neuron can gate a connection between two neurons, or a neuron's self-connection. This allows you to create second order neural network architectures.
     * @param connection
     */
    gate(connection: Neuron$Connection): void;

    /**
     * When a neuron activates, it computes its state from all its input connections and squashes it using its activation function, and returns the output (activation).
     * @param activation You can provide the activation as a parameter (useful for neurons in the input layer. it has to be a float between 0 and 1).
     */
    activate(activation?: number): number;

    /**
     * After an activation, you can teach the neuron what should have been the correct output (a.k.a. train). This is done by backpropagating the error.
     * @param learningRate a learning rate
     * @param targetValue a target value (float between 0 and 1)
     */
    propagate(learningRate: number, targetValue: number): void;

    /**
     * Returns true or false whether the neuron is self-connected or not.
     */
    selfconnected(): boolean;

    /**
     * Returns true or false whether the neuron is connected to another neuron (parameter).
     * @param neuron
     */
    connected(
      neuron?: any
    ):
      | {
          result: any,
          connection: any
        }
      | boolean;

    /**
     * Clears all the traces (the neuron forgets it's context, but the connections remain intact).
     */
    clear(): void;

    /**
     * All the connections are randomized and the traces are cleared.
     */
    reset(): void;

    /**
     * Hardcodes the behavior of the neuron into an optimized function.
     */
    optimize(
      optimized?: any,
      layer?: any
    ): {
      memory: any,
      neurons: any,
      inputs: any,
      outputs: any,
      targets: any,
      variables: any,
      activation_sentences: any,
      trace_sentences: any,
      propagation_sentences: any,
      layers: any
    };
    static uid(): number;
    static quantity(): {
      neurons: number,
      connections: number
    };
  }

  declare var npm$namespace$Layer: {
    connection: typeof Layer$connection,
    connectionType: typeof Layer$connectionType,
    gateType: typeof Layer$gateType,
    LayerConnection: typeof Layer$LayerConnection
  };

  /**
   * Types of connections.
   */

  declare var Layer$connectionType: {|
    +ALL_TO_ALL: 0, // 0
    +ONE_TO_ONE: 1, // 1
    +ALL_TO_ELSE: 2 // 2
  |};

  /**
   * Represents a connection from one layer to another, and keeps track of its weight and gain.
   */
  declare class Layer$LayerConnection {
    ID: number;
    from: any;
    to: any;
    selfconnection: any;
    type: any;
    connections: any;
    list: any;
    size: any;
    gatedfrom: any;
    static uid(): number;
  }

  declare var Layer$connection: typeof LayerConnection;

  /**
   * Types of gates.
   */

  declare var Layer$gateType: {|
    +INPUT: 0, // 0
    +OUTPUT: 1, // 1
    +ONE_TO_ONE: 2 // 2
  |};

  declare interface Layer$Options {
    label?: any;
    squash?: Neuron$SquashingFunction;
    bias?: number;
    input: Layer;
    hidden: Layer[];
    output: Layer;
  }

  /**
   * Normally you won't work with single neurons, but use Layers instead. A layer is basically an array of neurons, they can do pretty much the same things as neurons do, but it makes the programming process faster.
   */
  declare export class Layer {
    size: number;
    list: Neuron[];
    label: any;
    connectedTo: any;

    /**
     * Normally you won't work with single neurons, but use Layers instead. A layer is basically an array of neurons, they can do pretty much the same things as neurons do, but it makes the programming process faster.
     * @param numberOfNeurons the number of neurons in that layer
     */
    constructor(numberOfNeurons: number): this;

    /**
     * A layer can project a connection to another layer. Layers can also self-connect.
     * @param connectionType If not specified, the connection type is always Layer.connectionType.ALL_TO_ALL when connecting two different layers, and is Layer.connectionType.ONE_TO_ONE when connecting a layer to itself (ie myLayer.project(myLayer)).
     */
    project(
      layer: Layer | Network,
      connectionType?: Layer$connectionType,
      weights?: any
    ): Layer$LayerConnection;

    /**
     * A layer can gate a connection between two other layers, or a layers's self-connection.
     */
    gate(connection: Layer$LayerConnection, gateType: Layer$gateType): void;

    /**
     * When a layer activates, it just activates all the neurons in that layer in order, and returns an array with the outputs.
     * @param activation It accepts an array of activations as parameter (for input layers).
     */
    activate(activation?: number[]): number[];

    /**
     * After an activation, you can teach the layer what should have been the correct output (a.k.a. train). This is done by backpropagating the error.
     * @param learningRate A learning rate.
     * @param targetValue A target value (array of floats between 0 and 1).
     */
    propagate(learningRate: number, targetValue: number[]): void;

    /**
     * True or false whether the whole layer is self-connected or not.
     */
    selfconnected(): boolean;

    /**
     * True of false whether the layer is connected to another layer (parameter) or not.
     * @param layer
     */
    connected(layer: any): any;

    /**
     * Clears all the neurons in the layer.
     */
    clear(): void;

    /**
     * Resets all the neurons in the layer.
     */
    reset(): void;

    /**
     * Adds a neuron to the layer.
     * @param neuron
     */
    add(neuron: any): void;

    /**
     * Set the squashing function and bias of all the neurons in a layer.
     * @param options
     */
    set(options: Layer$Options): this;

    /**
     * Returns an array with all the neurons in the layer, in activation order.
     */
    neurons(): Neuron[];
  }
  declare interface Network$Options {
    label?: any;
    squash?: Neuron$SquashingFunction;
    bias?: number;
    input: Layer;
    hidden: Layer[];
    output: Layer;
  }

  declare interface Network$Optimized {
    memory: Float64Array;
    ownership: (memoryBuffer: Float64Array) => void;
  }

  /**
   * Networks are basically an array of layers. They have an input layer, a number of hidden layers, and an output layer.
   */
  declare export class Network {
    layers: Network$Options;
    optimized: Network$Optimized;

    /**
     * Networks are basically an array of layers. They have an input layer, a number of hidden layers, and an output layer.
     */
    constructor(options?: Network$Options): this;

    /**
     * A network can project a connection to another, or gate a connection between two others networks in the same way Layers do.
     * @param connectionType
     */
    project(
      otherNetwork: Network | Layer,
      connectionType?: Layer$connectionType,
      weights?: any
    ): Layer$LayerConnection;

    /**
     * A Network can gate a connection between two other Networks or Layers, or a Layers's self-connection.
     * @param layerConnection
     * @param gateType
     */
    gate(
      layerConnection: Layer$LayerConnection,
      gateType: Layer$gateType
    ): void;

    /**
     * When a network is activated, an input must be provided to activate the input layer, then all the hidden layers are activated in order, and finally the output layer is activated and its activation is returned.
     * @param activation
     */
    activate(activation: number[]): number[];

    /**
     * You can provide a target value and a learning rate to a network and backpropagate the error from the output layer to all the hidden layers in reverse order until reaching the input layer.
     * @param learningRate
     * @param targetValue
     */
    propagate(learningRate: number, targetValue: number[]): void;

    /**
     * Networks can be stored as JSON's.
     */
    toJSON(): any;

    /**
     * Creates a static String to store the source code of the functions that are identical for all the workers (train, _trainSet, test).
     * @returns Source code that can train a network inside a worker.
     */
    static getWorkerSharedFunctions(): string;

    /**
     * Rebuild a network that has been stored in a json using the method toJSON().
     */
    static fromJSON(exported: any): Network;

    /**
     * The network can be converted into a WebWorker. This feature doesn't work in node.js, and it's not supported on every browser (it must support Blob).
     * @returns Return a HTML5 WebWorker specialized on training the network stored in `memory`. Train based on the given dataSet and options. The worker returns the updated `memory` when done.
     */
    worker(memory?: any, set?: any, options?: any): Worker;

    /**
     * Export the topology into dot language which can be visualized as graphs using dot.
     * @param edgeConnection
     */
    toDot(
      edgeConnection?: any
    ): {
      code: string,
      link: string
    };

    /**
     * The network can be exported to a single javascript Function. This can be useful when your network is already trained and you just need to use it, since the standalone functions is just one javascript function with an array and operations within, with no dependencies on Synaptic or any other library.
     * @returns Returns a function that works as the activation of the network and can be used without depending on the library.
     */
    standalone(): (inputs: number[]) => number[];

    /**
     * A network can be cloned to a completely new instance, with the same connections and traces.
     * @returns Returns a copy of the network.
     */
    clone(): Network;

    /**
     * Return an array with all the neurons in the network, in activation order.
     */
    neurons(): number[];

    /**
     * The method set(layers) receives an object with layers in the same format as the constructor of Network and sets them as the layers of the Network, this is useful when you are extending the Network class to create your own architectures.
     */
    set(options: Network$Options): void;

    /**
     * Returns number of inputs of the network.
     */
    inputs(): number;

    /**
     * Returns number of outputs of hte network.
     */
    outputs(): number;
    setOptimize(optimize: any): void;

    /**
     * Restores all the values from the optimized network the their respective objects in order to manipulate the network.
     */
    restore(): any | void;

    /**
     * Hardcodes the behaviour of the whole network into a single optimized function.
     */
    optimize(): void;

    /**
     * Clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained).
     */
    clear(): void;

    /**
     * Reset all weights and clear all traces (ends up like a new network).
     */
    reset(): void;
  }

  declare var npm$namespace$Architect: {
    Perceptron: typeof Architect$Perceptron,
    LSTM: typeof Architect$LSTM,
    Liquid: typeof Architect$Liquid,
    Hopfield: typeof Architect$Hopfield
  };

  /**
   * This architecture allows you to create multilayer perceptrons, also known as feed-forward neural networks. They consist of a sequence of layers, each fully connected to the next one.
   */
  declare class Architect$Perceptron mixins Network {
    trainer: Trainer;

    /**
     * This architecture allows you to create multilayer perceptrons, also known as feed-forward neural networks. They consist of a sequence of layers, each fully connected to the next one.
     * @param numberOfNeurons You have to provide a minimum of 3 layers (input, hidden and output), but you can use as many hidden layers as you wish.
     */
    constructor(...numberOfNeurons: number[]): this;
  }

  /**
   * The long short-term memory is an architecture well-suited to learn from experience to classify, process and predict time series when there are very long time lags of unknown size between important events.
   */
  declare class Architect$LSTM mixins Network {
    trainer: Trainer;

    /**
     * The long short-term memory is an architecture well-suited to learn from experience to classify, process and predict time series when there are very long time lags of unknown size between important events.
     * @param numberOfNeurons To use this architecture you have to set at least one input layer, one memory block assembly (consisting of four layers: input gate, memory cell, forget gate and output gate), and an output layer. Also you can set many layers of memory blocks.
     */
    constructor(...numberOfNeurons: number[]): this;
  }

  /**
   * The Liquid architecture allows you to create Liquid State Machines. In these networks, neurons are randomly connected to each other. The recurrent nature of the connections turns the time varying input into a spatio-temporal pattern of activations in the network nodes.
   */
  declare class Architect$Liquid mixins Network {
    trainer: Trainer;

    /**
     * The Liquid architecture allows you to create Liquid State Machines. In these networks, neurons are randomly connected to each other. The recurrent nature of the connections turns the time varying input into a spatio-temporal pattern of activations in the network nodes.
     * @param input The size of the input layer.
     * @param pool The size of the pool.
     * @param output The size of the output layer.
     * @param connections The number of random connections in the pool.
     * @param gates The number of random gates among the connections.
     */
    constructor(
      input: number,
      pool: number,
      output: number,
      connections: number,
      gates: number
    ): this;
  }

  /**
   * The Hopfield architecture serves as content-addressable memory. They are trained to remember patterns and then when feeding new patterns to the network it returns the most similar one from the patterns it was trained to remember.
   */
  declare class Architect$Hopfield mixins Network {
    /**
     * The Hopfield architecture serves as content-addressable memory. They are trained to remember patterns and then when feeding new patterns to the network it returns the most similar one from the patterns it was trained to remember.
     * @param patternSize Pattern size in bits.
     */
    constructor(patternSize: number): this;

    /**
     * Teach the network two different patterns.
     * @param patterns
     */
    learn(patterns: [number[], number[]]): any;

    /**
     * Feed new patterns to the network and it will return the most similar to the ones it was trained to remember.
     * @param pattern
     */
    feed(pattern: number[]): number[];
  }

  declare var npm$namespace$Trainer: {
    cost: typeof npm$namespace$Trainer$cost
  };
  declare interface Trainer$TrainingPair {
    input: number[];
    output: number[];
  }

  declare type Trainer$TrainingSet = Trainer$TrainingPair[];

  declare interface Trainer$TrainingOptions {
    /**
     * Learning rate to train the network. It can be a static rate (just a number), dynamic (an array of numbers, which will transition from one to the next one according to the number of iterations) or a callback function: (iterations, error) => rate.
     */
    rate?: number | number[] | ((iterations: number, error: number) => number);

    /**
     * Maximum number of iterations.
     */
    iterations?: number;

    /**
     * Minimum error.
     */
    error?: number;

    /**
     * If true, the training set is shuffled after every iteration, this is useful for training data sequences which order is not meaningful to networks with context memory, like LSTM's.
     */
    shuffle?: boolean;

    /**
     * You can set what cost function to use for the training, there are three built-in cost functions (Trainer.cost.CROSS_ENTROPY, Trainer.cost.MSE and Trainer.cost.BINARY) to choose from cross-entropy or mean squared error. You can also use you own cost function(targetValues, outputValues).
     */
    cost?: Trainer$CostFunction;

    /**
     * This commands the trainer to console.log the error and iterations every X number of iterations.
     */
    log?: number;

    /**
     * You can create custom scheduled tasks that will be executed every X number of iterations. It can be used to create custom logs, or to compute analytics based on the data passed to the task (data object includes error, iterations and the current learning rate). If the returned value of the task is true, the training will be aborted. This can be used to create special conditions to stop the training (i.e. if the error starts to increase).
     */
    schedule?: Trainer$TrainingScheduleOptions;
  }

  declare interface Trainer$TrainingScheduleDoData {
    error: any;
    iterations: any;

    /**
     * The current learning rate.
     */
    rate: any;
  }

  declare interface Trainer$TrainingScheduleOptions {
    every: number;
    do: (data: Trainer$TrainingScheduleDoData) => boolean | void;
  }

  declare type Trainer$CostFunction = (
    targetValues: number[],
    outputValues: number[]
  ) => number;

  declare var npm$namespace$Trainer$cost: {
    CROSS_ENTROPY: typeof Trainer$cost$CROSS_ENTROPY,
    MSE: typeof Trainer$cost$MSE,
    BINARY: typeof Trainer$cost$BINARY
  };
  declare var Trainer$cost$CROSS_ENTROPY: Trainer$CostFunction;

  declare var Trainer$cost$MSE: Trainer$CostFunction;

  declare var Trainer$cost$BINARY: Trainer$CostFunction;

  declare interface Trainer$TrainingResult {
    error: number;
    iterations: number;
    time: number;
  }

  declare interface Trainer$XOROptions {
    iterations?: number;
    log?: number;
    shuffle?: boolean;
    cost?: Trainer$CostFunction;
  }

  declare interface Trainer$DSROptions {
    targets?: number[];
    distractors?: number[];
    prompts?: number[];
    length?: number;
    success?: number;
    iterations?: number;
    rate?: number;
    log?: number;
    schedule?: Trainer$TrainingScheduleOptions;
    cost?: Trainer$CostFunction;
  }

  declare interface Trainer$DSRTrainingResult {
    error: number;
    iterations: number;
    time: number;
    success: any;
  }

  declare interface Trainer$ERGOptions {
    iterations?: number;
    error?: number;
    rate?: number;
    log?: number;
    cost?: Trainer$CostFunction;
  }

  declare interface Trainer$ERGTrainingResult {
    error: number;
    iterations: number;
    time: number;
    test: any;
    generate: any;
  }

  /**
   * The Trainer makes it easier to train any set to any network, no matter its architecture. The trainer also contains built-in tasks to test the performance of your network.
   */
  declare export class Trainer {
    /**
     * The Trainer makes it easier to train any set to any network, no matter its architecture. The trainer also contains built-in tasks to test the performance of your network.
     * @param network
     */
    constructor(network: Network): this;

    /**
     * This method allows you to train any training set to a Network.
     * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
     */
    train(
      trainingSet: Trainer$TrainingSet,
      trainingOptions?: Trainer$TrainingOptions
    ): Trainer$TrainingResult;

    /**
     * This method allows you to train any training set to a Network.
     * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
     */
    trainAsync(
      trainingSet: Trainer$TrainingSet,
      trainingOptions?: Trainer$TrainingOptions
    ): Promise<Trainer$TrainingResult>;

    /**
     * This method accepts the same arguments as train(dataSet, options). It will iterate over the dataSet, activating the network.
     * @returns It returns the elapsed time and the error (by default, the MSE, but you can specify the cost function in the options, same way as in train()).
     */
    test(
      trainingSet: Trainer$TrainingSet,
      trainingOptions?: Trainer$TrainingOptions
    ): Trainer$TrainingResult;

    /**
     * This method trains an XOR to the network, is useful when you are experimenting with different architectures and you want to test and compare their performances.
     */
    XOR(options?: Trainer$XOROptions): Trainer$TrainingResult;

    /**
     * This method trains the network to complete a Discrete Sequence Recall, which is a task for testing context memory in neural networks.
     */
    DSR(options?: Trainer$DSROptions): Trainer$DSRTrainingResult;

    /**
     * This method trains the network to pass an Embedded Reber Grammar test.
     */
    ERG(options?: Trainer$ERGOptions): Trainer$ERGTrainingResult;

    /**
     * This test challenges the network to complete a timing task.
     */
    timingTask(
      options?: any
    ): {
      train: any,
      test: any
    };
  }
}
