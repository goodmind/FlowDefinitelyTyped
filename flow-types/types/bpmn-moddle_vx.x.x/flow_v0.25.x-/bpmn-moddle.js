declare module "bpmn-moddle" {
  declare type BPMNModdle$AdHocOrdering = "Parallel" | "Sequential";

  declare type BPMNModdle$AssociationDirection = "None" | "One" | "Both";

  declare type BPMNModdle$ChoreographyLoopType =
    | "None"
    | "Standard"
    | "MultiInstanceSequential"
    | "MultiInstanceParallel";

  declare type BPMNModdle$EventBasedGatewayType = "Parallel" | "Exclusive";

  declare type BPMNModdle$GatewayDirection =
    | "Unspecified"
    | "Converging"
    | "Diverging"
    | "Mixed";

  declare type BPMNModdle$ItemKind = "Physical" | "Information";

  declare type BPMNModdle$MultiInstanceBehaviour =
    | "None"
    | "One"
    | "All"
    | "Complex";

  declare type BPMNModdle$ProcessType = "None" | "Public" | "Private";

  declare type BPMNModdle$RelationshipDirection =
    | "None"
    | "Forward"
    | "Backward"
    | "Both";

  declare interface BPMNModdle$TypeDerived {
    $type: BPMNModdle$ElementType;
  }

  declare type BPMNModdle$BaseElement = {
    /**
     * Is the primary Id of the element
     */
    id: string,

    /**
     * Documentation for the element
     */
    documentation?: BPMNModdle$Documentation[],

    /**
     * Reference to the extension definitions for this element
     */
    extensionDefinitions?: BPMNModdle$ExtensionDefinition[],

    /**
     * Extension Elements
     */
    extensionElements?: BPMNModdle$ExtensionElements,

    /**
     * Attributes that aren't defined by the BPMN Spec such
     * as Camunda properties
     */
    $attrs?: {
      [key: string]: any
    }
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$RootElement = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$Interface = {
    name: string,
    operations: BPMNModdle$Operation[],
    implementationRef: string
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$Operation = {
    name: string,
    inMessageRef: BPMNModdle$Message,
    outMessageRef: BPMNModdle$Message,
    errorRef: BPMNModdle$ErrorElement,
    implementationRef: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$EndPoint = {} & BPMNModdle$RootElement;

  declare type BPMNModdle$Auditing = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$CallableElement = {
    name: string,
    ioSpecification: BPMNModdle$InputOutputSpecification,
    supportedInterfaceRef: BPMNModdle$Interface,
    ioBinding: BPMNModdle$InputOutputBinding
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ResourceRole = {
    name: string,
    resourceRef: BPMNModdle$Resource,
    ResourceParameterBindings: BPMNModdle$ResourceParameterBinding[],
    resourceAssignmentExpression: BPMNModdle$ResourceAssignmentExpression
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$GlobalTask = {
    resources: BPMNModdle$ResourceRole
  } & BPMNModdle$CallableElement;

  declare type BPMNModdle$Monitoring = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$Performer = {} & BPMNModdle$ResourceRole;

  declare type BPMNModdle$Process = {
    processType: string,
    isClosed: boolean,
    auditing: BPMNModdle$Auditing,
    monitoring: BPMNModdle$Monitoring,
    properties: BPMNModdle$Property[],
    laneSets: BPMNModdle$LaneSet[],
    flowElements: BPMNModdle$FlowElement[],
    artifacts: BPMNModdle$Artifact[],
    resources: BPMNModdle$ResourceRole[],
    correlationSubscriptions: BPMNModdle$CorrelationSubscription[],
    supports: BPMNModdle$Process[],
    definitionalCollaborationRef: BPMNModdle$Collaboration,
    isExecutable: boolean
  } & BPMNModdle$FlowElementsContainer &
    BPMNModdle$CallableElement;

  declare type BPMNModdle$LaneSet = {
    lanes: BPMNModdle$Lane[],
    name: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Lane = {
    name: string,
    partitionElementRef: BPMNModdle$BaseElement,
    partitionElement: BPMNModdle$BaseElement,
    flowNodeRef: BPMNModdle$FlowNode[],
    childLaneSet: BPMNModdle$LaneSet
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$GlobalManualTask = {} & BPMNModdle$GlobalTask;

  declare type BPMNModdle$ManualTask = {} & BPMNModdle$Task;

  declare type BPMNModdle$UserTask = {
    renderings: BPMNModdle$Rendering[],
    implementation: string
  } & BPMNModdle$Task;

  declare type BPMNModdle$Rendering = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$HumanPerformer = {} & BPMNModdle$Performer;

  declare type BPMNModdle$PotentialOwner = {} & BPMNModdle$Performer;

  declare type BPMNModdle$GlobalUserTask = {
    implementation: string,
    renderings: BPMNModdle$Rendering
  } & BPMNModdle$GlobalTask;

  declare type BPMNModdle$Gateway = {
    /**
     * @default Unspecified
     */
    gatewayDirection: BPMNModdle$GatewayDirection
  } & BPMNModdle$FlowNode;

  declare type BPMNModdle$EventBasedGateway = {
    instantiate: boolean,

    /**
     * @default Exclusive
     */
    eventGatewayType: BPMNModdle$EventBasedGatewayType
  } & BPMNModdle$Gateway;

  declare type BPMNModdle$ComplexGateway = {
    activationCondition: BPMNModdle$Expression,
    default: BPMNModdle$SequenceFlow
  } & BPMNModdle$Gateway;

  declare type BPMNModdle$ExclusiveGateway = {
    default: BPMNModdle$SequenceFlow
  } & BPMNModdle$Gateway;

  declare type BPMNModdle$InclusiveGateway = {
    default: BPMNModdle$SequenceFlow
  } & BPMNModdle$Gateway;

  declare type BPMNModdle$ParallelGateway = {} & BPMNModdle$Gateway;

  declare type BPMNModdle$Relationship = {
    __esri$type: string,
    direction: BPMNModdle$RelationshipDirection,
    source: BPMNModdle$BaseElement[],
    target: BPMNModdle$BaseElement[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Extension = {
    /**
     * @default false
     */
    mustUnderstand: boolean,
    definition: BPMNModdle$ExtensionDefinition
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ExtensionDefinition = {
    name: string,
    extensionAttributeDefinitions: BPMNModdle$ExtensionAttributeDefinition[]
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ExtensionAttributeDefinition = {
    name: string,
    __esri$type: string,

    /**
     * @default false
     */
    isReference: boolean
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ExtensionElements = {
    valueRef: BPMNModdle$BaseElement,
    values: BPMNModdle$BaseElement[],
    extensionAttributeDefinition: BPMNModdle$ExtensionAttributeDefinition,
    [key: string]: any
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Documentation = {
    text: string,

    /**
     * @default "text/plain"
     */
    textFormat: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Event = {
    properties: BPMNModdle$Property[]
  } & BPMNModdle$FlowNode &
    BPMNModdle$InteractionNode;

  declare type BPMNModdle$IntermediateCatchEvent = {} & BPMNModdle$CatchEvent;

  declare type BPMNModdle$IntermediateThrowEvent = {} & BPMNModdle$ThrowEvent;

  declare type BPMNModdle$EndEvent = {} & BPMNModdle$ThrowEvent;

  declare type BPMNModdle$StartEvent = {
    /**
     * @default true
     */
    isInterrupting: boolean
  } & BPMNModdle$CatchEvent;

  declare type BPMNModdle$ThrowEvent = {
    dataInputs: BPMNModdle$DataInput[],
    dataInputAssociations: BPMNModdle$DataInputAssociation[],
    inputSet: BPMNModdle$InputSet,
    eventDefinitions: BPMNModdle$EventDefinition[],
    eventDefinitionRef: BPMNModdle$EventDefinition[]
  } & BPMNModdle$Event;

  declare type BPMNModdle$CatchEvent = {
    /**
     * @default false
     */
    parallelMultiple: boolean,
    dataOutputs: BPMNModdle$DataOutput[],
    dataOutputAssociations: BPMNModdle$DataOutputAssociation[],
    outputSet: BPMNModdle$OutputSet,
    eventDefinitions: BPMNModdle$EventDefinition[]
  } & BPMNModdle$Event;

  declare type BPMNModdle$BoundaryEvent = {
    /**
     * @default true
     */
    cancelActivity: boolean,
    attachedToRef: BPMNModdle$Activity
  } & BPMNModdle$CatchEvent;

  declare type BPMNModdle$EventDefinition = {} & BPMNModdle$RootElement;

  declare type BPMNModdle$CancelEventDefinition = {} & BPMNModdle$EventDefinition;

  declare type BPMNModdle$ErrorEventDefinition = {
    errorRef: BPMNModdle$ErrorElement
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$TerminateEventDefinition = {} & BPMNModdle$EventDefinition;

  declare type BPMNModdle$EscalationEventDefinition = {
    escalationRef: BPMNModdle$Escalation
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$Escalation = {
    structureRef: BPMNModdle$ItemDefinition,
    name: string,
    escalationCode: string
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$CompensateEventDefinition = {
    waitForCompletion: boolean,
    activityRef: BPMNModdle$Activity
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$TimerEventDefinition = {
    timeDate: BPMNModdle$Expression,
    timeCycle: BPMNModdle$Expression,
    timeDuration: BPMNModdle$Expression
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$LinkEventDefinition = {
    name: string,
    target: BPMNModdle$LinkEventDefinition,
    source: BPMNModdle$LinkEventDefinition
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$MessageEventDefinition = {
    nessageRef: BPMNModdle$Message,
    operationRef: BPMNModdle$Operation
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$ConditionalEventDefinition = {
    condition: BPMNModdle$Expression
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$SignalEventDefinition = {
    singalRef: BPMNModdle$Signal
  } & BPMNModdle$EventDefinition;

  declare type BPMNModdle$Signal = {
    structureRef: BPMNModdle$ItemDefinition,
    name: string
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ImplicitThrowEvent = {} & BPMNModdle$ThrowEvent;

  declare type BPMNModdle$DataState = {
    name: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$ItemAwareElement = {
    itemSubjectRef: BPMNModdle$ItemDefinition,
    dataState: BPMNModdle$DataState
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$DataAssociation = {
    assignment: BPMNModdle$Assignment,
    sourceRef: BPMNModdle$ItemAwareElement,
    targetRef: BPMNModdle$ItemAwareElement,
    transformation: BPMNModdle$FormalExpression
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$DataInput = {
    name: string,

    /**
     * @default false
     */
    isCollection: boolean,
    inputSetRef: BPMNModdle$InputSet,
    inputSetWithOptional: BPMNModdle$InputSet,
    inputSetWithWhileExecuting: BPMNModdle$InputSet
  } & BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$DataOutput = {
    name: string,

    /**
     * @default false
     */
    isCollection: boolean,
    outputSetRef: BPMNModdle$InputSet[],
    outputSetWithOptional: BPMNModdle$InputSet[],
    outputSetWithWhileExecuting: BPMNModdle$InputSet[]
  } & BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$InputSet = {
    name: string,
    dataInputRefs: BPMNModdle$DataInput[],
    optionalInputRefs: BPMNModdle$DataInput[],
    whileExecutingInputsRefs: BPMNModdle$DataInput[],
    outputSetRefs: BPMNModdle$OutputSet[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$OutputSet = {
    dataOutputRefs: BPMNModdle$DataOutput[],
    name: string,
    inputSetRefs: BPMNModdle$InputSet[],
    optionalOutputRefs: BPMNModdle$DataOutput[],
    whileExecutingOutputREfs: BPMNModdle$DataOutput[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Property = {
    name: string
  } & BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$DataInputAssociation = {} & BPMNModdle$DataAssociation;

  declare type BPMNModdle$DataOutputAssociation = {} & BPMNModdle$DataAssociation;

  declare type BPMNModdle$InputOutputSpecification = {
    dataInputs: BPMNModdle$DataInput[],
    dataOutputs: BPMNModdle$DataOutput[],
    inputSets: BPMNModdle$InputSet[],
    outputSets: BPMNModdle$OutputSet[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$DataObject = {
    /**
     * @default false
     */
    isCollection: boolean
  } & BPMNModdle$FlowElement &
    BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$InputOutputBinding = {
    inputDataRef: BPMNModdle$InputSet,
    outputDataRef: BPMNModdle$OutputSet,
    operationRef: BPMNModdle$Operation
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Assignment = {
    from: BPMNModdle$Expression,
    to: BPMNModdle$Expression
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$DataStore = {
    name: string,
    capacity: number,
    isUnlimited: boolean
  } & BPMNModdle$RootElement &
    BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$DataStoreReference = {
    dataStoreRef: BPMNModdle$DataStore
  } & BPMNModdle$FlowElement &
    BPMNModdle$ItemAwareElement;

  declare type BPMNModdle$DataObjectReference = {
    dataObjectRef: BPMNModdle$DataObject
  } & BPMNModdle$ItemAwareElement &
    BPMNModdle$FlowElement;

  declare type BPMNModdle$ConversationLink = {
    sourceRef: BPMNModdle$InteractionNode,
    targetRef: BPMNModdle$InteractionNode,
    name: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$ConversationAssociation = {
    innerConversationNodeRef: BPMNModdle$ConversationNode,
    outerConversationNodeRef: BPMNModdle$ConversationNode
  } & BPMNModdle$ConversationNode;

  declare type BPMNModdle$CallConversation = {
    calledCollaborationRef: BPMNModdle$Collaboration,
    participantAssociations: BPMNModdle$ParticipantAssociation[]
  } & BPMNModdle$ConversationNode;

  declare type BPMNModdle$Conversation = {} & BPMNModdle$ConversationNode;

  declare type BPMNModdle$SubConversation = {
    conversationNodes: BPMNModdle$ConversationNode[]
  } & BPMNModdle$ConversationNode;

  declare type BPMNModdle$ConversationNode = {
    name: string,
    participantRefs: BPMNModdle$Participant[],
    messageFlowRefs: BPMNModdle$MessageFlow[],
    correlationKeys: BPMNModdle$CorrelationKey[]
  } & BPMNModdle$InteractionNode &
    BPMNModdle$BaseElement;

  declare type BPMNModdle$GlobalConversation = {} & BPMNModdle$Collaboration;

  declare type BPMNModdle$PartnerEntity = {
    name: string,
    participantRef: BPMNModdle$Participant[]
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$PartnerRole = {
    name: string,
    participantRef: BPMNModdle$Participant[]
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$CorrelationProperty = {
    correlationPropertyRetrievalExpression: BPMNModdle$CorrelationPropertyRetrievalExpression,
    name: string,
    __esri$type: BPMNModdle$ItemDefinition
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ErrorElement = {
    structureRef: BPMNModdle$ItemDefinition,
    name: string,
    errorCode: string
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$CorrelationKey = {
    correlationPropertyRef: BPMNModdle$CorrelationProperty,
    name: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Expression = {
    body: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$FormalExpression = {
    language: string,
    evaluatesToTypeRef: BPMNModdle$ItemDefinition
  } & BPMNModdle$Expression;

  declare type BPMNModdle$Message = {
    name: string,
    itemRef: BPMNModdle$ItemDefinition
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ItemDefinition = {
    itemKind: BPMNModdle$ItemKind,
    structureRef: string,

    /**
     * @default false
     */
    isCollection: boolean,
    import: BPMNModdle$Import
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$FlowElement = {
    name?: string,
    auditing: BPMNModdle$Auditing,
    monitoring: BPMNModdle$Monitoring,
    categoryValueRef: BPMNModdle$CategoryValue[]
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$SequenceFlow = {
    isImmediate: boolean,
    conditionExpression: BPMNModdle$Expression,
    sourceRef: BPMNModdle$FlowNode,
    targetRef: BPMNModdle$FlowNode
  } & BPMNModdle$FlowElement;

  declare type BPMNModdle$FlowElementsContainer = {
    laneSets: BPMNModdle$LaneSet[],
    flowElements: BPMNModdle$FlowElement[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$FlowNode = {
    incoming: BPMNModdle$SequenceFlow[],
    outgoing: BPMNModdle$SequenceFlow[],
    lanes: BPMNModdle$Lane[]
  } & BPMNModdle$FlowElement;

  declare type BPMNModdle$CorrelationPropertyRetrievalExpression = {
    messagePath: BPMNModdle$FormalExpression,
    messageRef: BPMNModdle$Message
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$CorrelationPropertyBinding = {
    dataPath: BPMNModdle$FormalExpression,
    correlationPropertyRef: BPMNModdle$CorrelationProperty
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Resource = {
    name: string,
    resourceParameters: BPMNModdle$ResourceParameter[]
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ResourceParameter = {
    name: string,
    isRequired: boolean,
    __esri$type: BPMNModdle$ItemDefinition
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$CorrelationSubscription = {
    correlationKeyRef: BPMNModdle$CorrelationKey,
    correlationPropertyBinding: BPMNModdle$CorrelationKey[]
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$MessageFlow = {
    name: string,
    sourceRef: BPMNModdle$InteractionNode,
    targetRef: BPMNModdle$InteractionNode,
    messageRef: BPMNModdle$Message
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$MessageFlowAssociation = {
    innerMessageFlowRef: BPMNModdle$MessageFlow,
    outerMessageFlowRef: BPMNModdle$MessageFlow
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$InteractionNode = {
    incomingConversationLinks: BPMNModdle$ConversationLink[],
    outgoingConversationLinks: BPMNModdle$ConversationLink[]
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Participant = {
    name: string,
    interfaceRef: BPMNModdle$Interface[],
    participantMultiplicity: BPMNModdle$ParticipantMultiplicity,
    endPointRefs: BPMNModdle$EndPoint[],
    processRef: BPMNModdle$Process
  } & BPMNModdle$InteractionNode &
    BPMNModdle$BaseElement;

  declare type BPMNModdle$ParticipantAssociation = {
    innerParticipantRef: BPMNModdle$Participant,
    outerParticipantRef: BPMNModdle$Participant
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$ParticipantMultiplicity = {
    minimum: number,
    maximum: number
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Collaboration = {
    name: string,
    isClosed: boolean,
    participants: BPMNModdle$Participant[],
    messageFlows: BPMNModdle$MessageFlow[],
    artifacts: BPMNModdle$Artifact[],
    conversations: BPMNModdle$ConversationNode[],
    conversationAssociations: BPMNModdle$ConversationAssociation[],
    participantAssociations: BPMNModdle$ParticipantAssociation[],
    messageFlowAssociations: BPMNModdle$MessageFlowAssociation[],
    correlationKeys: BPMNModdle$CorrelationKey[],
    choreographyRef: BPMNModdle$Choreography[],
    conversationLinks: BPMNModdle$ConversationLink[]
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$ChoreographyActivity = {
    participantRef: BPMNModdle$Participant[],
    initiatingParticipantRef: BPMNModdle$Participant,
    correlationKeys: BPMNModdle$CorrelationKey[],
    loopType: BPMNModdle$ChoreographyLoopType
  } & BPMNModdle$FlowNode;

  declare type BPMNModdle$CallChoreography = {
    calledChoreographyRef: BPMNModdle$Choreography,
    participantAssociations: BPMNModdle$ParticipantAssociation[]
  } & BPMNModdle$ChoreographyActivity;

  declare type BPMNModdle$SubChoreography = {
    artifacts: BPMNModdle$Artifact[]
  } & BPMNModdle$ChoreographyActivity &
    BPMNModdle$FlowElementsContainer;

  declare type BPMNModdle$ChoreographyTask = {
    messageFlowRef: BPMNModdle$MessageFlow[]
  } & BPMNModdle$ChoreographyActivity;

  declare type BPMNModdle$Choreography = {} & BPMNModdle$FlowElementsContainer &
    BPMNModdle$Collaboration;

  declare type BPMNModdle$GlobalChoreographyTask = {
    initiatingParticipantRef: BPMNModdle$Participant
  } & BPMNModdle$Choreography;

  declare type BPMNModdle$TextAnnotation = {
    text: string,
    textFormat: string
  } & BPMNModdle$Artifact;

  declare type BPMNModdle$Group = {
    categoryValueRef: BPMNModdle$CategoryValue
  } & BPMNModdle$Artifact;

  declare type BPMNModdle$Association = {
    associationDirection: BPMNModdle$AssociationDirection,
    sourceRef: BPMNModdle$BaseElement,
    targetRef: BPMNModdle$BaseElement
  } & BPMNModdle$Artifact;

  declare type BPMNModdle$Category = {
    categoryValue: BPMNModdle$CategoryValue,
    name: string
  } & BPMNModdle$RootElement;

  declare type BPMNModdle$Artifact = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$CategoryValue = {
    categorizedFlowElements: BPMNModdle$FlowElement[],
    value: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Activity = {
    isForCompensation: boolean,
    default: BPMNModdle$SequenceFlow,
    ioSpecification: BPMNModdle$InputOutputSpecification,
    boundaryEventRefs: BPMNModdle$BoundaryEvent[],
    properties: BPMNModdle$Property[],
    dataInputAssociations: BPMNModdle$DataInputAssociation[],
    dataOutputAssociations: BPMNModdle$DataOutputAssociation[],
    startQuantity: number,
    resources: BPMNModdle$ResourceRole,
    completionQuantity: number,
    loopCharacteristics: BPMNModdle$LoopCharacteristics
  } & BPMNModdle$FlowNode;

  declare type BPMNModdle$ServiceTask = {
    implementation: string,
    operationRef: BPMNModdle$Operation
  } & BPMNModdle$Task;

  declare type BPMNModdle$SubProcess = {
    triggeredByEvent: boolean,
    artifacts: BPMNModdle$Artifact[]
  } & BPMNModdle$Activity &
    BPMNModdle$FlowElementsContainer &
    BPMNModdle$InteractionNode;

  declare type BPMNModdle$LoopCharacteristics = {} & BPMNModdle$BaseElement;

  declare type BPMNModdle$MultiInstanceLoopCharacteristics = {
    isSequential: boolean,
    behavior: BPMNModdle$MultiInstanceBehaviour,
    loopCardinality: BPMNModdle$Expression,
    loopDataInputRef: BPMNModdle$ItemAwareElement,
    loopDataOutputRef: BPMNModdle$ItemAwareElement,
    inputDataItem: BPMNModdle$DataInput,
    outputDataItem: BPMNModdle$DataOutput,
    complexBehaviorDefinition: BPMNModdle$ComplexBehaviorDefinition,
    completionCondition: BPMNModdle$Expression,
    oneBehaviorEventRef: BPMNModdle$EventDefinition,
    noneBehaviorEventRef: BPMNModdle$EventDefinition
  } & BPMNModdle$LoopCharacteristics;

  declare type BPMNModdle$StandardLoopCharacteristics = {
    testBefore: boolean,
    loopCondition: BPMNModdle$Expression,
    loopMaximum: BPMNModdle$Expression
  } & BPMNModdle$LoopCharacteristics;

  declare type BPMNModdle$CallActivity = {
    calledElement: string
  } & BPMNModdle$Activity;

  declare type BPMNModdle$Task = {} & BPMNModdle$Activity &
    BPMNModdle$InteractionNode;

  declare type BPMNModdle$SendTask = {
    implementation: string,
    operationRef: BPMNModdle$Operation,
    messageRef: BPMNModdle$Message
  } & BPMNModdle$Task;

  declare type BPMNModdle$ReceiveTask = {
    implementation: string,
    instantiate: boolean,
    operationRef: BPMNModdle$Operation,
    messageRef: BPMNModdle$Message
  } & BPMNModdle$Task;

  declare type BPMNModdle$ScriptTask = {
    scriptFormat: string,
    script: string
  } & BPMNModdle$Task;

  declare type BPMNModdle$BusinessRuleTask = {
    implementation: string
  } & BPMNModdle$Task;

  declare type BPMNModdle$AdHocSubProcess = {
    completionCondition: BPMNModdle$Expression,
    ordering: BPMNModdle$AdHocOrdering,
    cancelRemainingInstances: boolean
  } & BPMNModdle$SubProcess;

  declare type BPMNModdle$Transaction = {
    protocal: string,
    method: string
  } & BPMNModdle$SubProcess;

  declare type BPMNModdle$GlobalScriptTask = {
    scriptLanguage: string,
    script: string
  } & BPMNModdle$GlobalTask;

  declare type BPMNModdle$GlobalBusinessRuleTask = {
    implementation: string
  } & BPMNModdle$GlobalTask;

  declare type BPMNModdle$ComplexBehaviorDefinition = {
    condition: BPMNModdle$FormalExpression,
    event: BPMNModdle$ImplicitThrowEvent
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$ResourceParameterBinding = {
    expression: BPMNModdle$Expression,
    parameterRef: BPMNModdle$ResourceParameter
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ResourceAssignmentExpression = {
    expression: BPMNModdle$Expression
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$Import = {
    importType: string,
    __esri$location: string,
    namespace: string
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Definitions = {
    name: string,
    targetNamespace: string,
    expressionLanguage: string,
    typeLanguage: string,
    imports: BPMNModdle$Import[],
    extensions: BPMNModdle$Extension[],
    rootElements: BPMNModdle$RootElement[],
    diagrams: BPMNModdle$BPMNDiagram,
    er: string,
    __esri$relationship: BPMNModdle$Relationship[],
    erVersion: string
  } & BPMNModdle$BaseElement;

  declare type BPMNModdle$BPMNDiagram = {
    plane: BPMNModdle$BPMNPlane,
    labelStyle: BPMNModdle$BPMNLabelStyle
  } & BPMNModdle$Diagram;

  declare type BPMNModdle$BPMNPlane = {} & BPMNModdle$Plane;

  declare type BPMNModdle$BPMNShape = {} & BPMNModdle$LabeledShape;

  declare type BPMNModdle$BPMNEdge = {} & BPMNModdle$LabeledEdge;

  declare type BPMNModdle$BPMNLabel = {} & BPMNModdle$Label;

  declare type BPMNModdle$BPMNLabelStyle = {} & BPMNModdle$Style;

  declare type BPMNModdle$Font = {
    name: string,
    __esri$size: number,
    isBold: boolean,
    isItalic: boolean,
    isUnderline: boolean,
    isStrikeThrough: boolean
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Point = {
    x: number,
    y: number,
    width: number,
    height: number
  } & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Bounds = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$DiagramElement = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Node = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Edge = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Diagram = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Shape = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Plane = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$LabeledEdge = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$LabeledShape = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Label = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$Style = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ColoredShape = {} & BPMNModdle$TypeDerived;

  declare type BPMNModdle$ColoredEdge = {} & BPMNModdle$TypeDerived;

  declare interface BPMNModdle$ElementTypes {
    "bpmn:Interface": BPMNModdle$Interface;
    "bpmn:Operation": BPMNModdle$Operation;
    "bpmn:EndPoint": BPMNModdle$EndPoint;
    "bpmn:Auditing": BPMNModdle$Auditing;
    "bpmn:GlobalTask": BPMNModdle$GlobalTask;
    "bpmn:Monitoring": BPMNModdle$Monitoring;
    "bpmn:Performer": BPMNModdle$Performer;
    "bpmn:Process": BPMNModdle$Process;
    "bpmn:LaneSet": BPMNModdle$LaneSet;
    "bpmn:Lane": BPMNModdle$Lane;
    "bpmn:GlobalManualTask": BPMNModdle$GlobalManualTask;
    "bpmn:ManualTask": BPMNModdle$ManualTask;
    "bpmn:UserTask": BPMNModdle$UserTask;
    "bpmn:Rendering": BPMNModdle$Rendering;
    "bpmn:HumanPerformer": BPMNModdle$HumanPerformer;
    "bpmn:PotentialOwner": BPMNModdle$PotentialOwner;
    "bpmn:GlobalUserTask": BPMNModdle$GlobalUserTask;
    "bpmn:Gateway": BPMNModdle$Gateway;
    "bpmn:EventBasedGateway": BPMNModdle$EventBasedGateway;
    "bpmn:ComplexGateway": BPMNModdle$ComplexGateway;
    "bpmn:ExclusiveGateway": BPMNModdle$ExclusiveGateway;
    "bpmn:InclusiveGateway": BPMNModdle$InclusiveGateway;
    "bpmn:ParallelGateway": BPMNModdle$ParallelGateway;
    "bpmn:RootElement": BPMNModdle$RootElement;
    "bpmn:Relationship": BPMNModdle$Relationship;
    "bpmn:BaseElement": BPMNModdle$BaseElement;
    "bpmn:Extension": BPMNModdle$Extension;
    "bpmn:ExtensionDefinition": BPMNModdle$ExtensionDefinition;
    "bpmn:ExtensionAttributeDefinition": BPMNModdle$ExtensionAttributeDefinition;
    "bpmn:ExtensionElements": BPMNModdle$ExtensionElements;
    "bpmn:Documentation": BPMNModdle$Documentation;
    "bpmn:Event": BPMNModdle$Event;
    "bpmn:IntermediateCatchEvent": BPMNModdle$IntermediateCatchEvent;
    "bpmn:IntermediateThrowEvent": BPMNModdle$IntermediateThrowEvent;
    "bpmn:EndEvent": BPMNModdle$EndEvent;
    "bpmn:StartEvent": BPMNModdle$StartEvent;
    "bpmn:ThrowEvent": BPMNModdle$ThrowEvent;
    "bpmn:CatchEvent": BPMNModdle$CatchEvent;
    "bpmn:BoundaryEvent": BPMNModdle$BoundaryEvent;
    "bpmn:EventDefinition": BPMNModdle$EventDefinition;
    "bpmn:CancelEventDefinition": BPMNModdle$CancelEventDefinition;
    "bpmn:ErrorEventDefinition": BPMNModdle$ErrorEventDefinition;
    "bpmn:TerminateEventDefinition": BPMNModdle$TerminateEventDefinition;
    "bpmn:EscalationEventDefinition": BPMNModdle$EscalationEventDefinition;
    "bpmn:Escalation": BPMNModdle$Escalation;
    "bpmn:CompensateEventDefinition": BPMNModdle$CompensateEventDefinition;
    "bpmn:TimerEventDefinition": BPMNModdle$TimerEventDefinition;
    "bpmn:LinkEventDefinition": BPMNModdle$LinkEventDefinition;
    "bpmn:MessageEventDefinition": BPMNModdle$MessageEventDefinition;
    "bpmn:ConditionalEventDefinition": BPMNModdle$ConditionalEventDefinition;
    "bpmn:SignalEventDefinition": BPMNModdle$SignalEventDefinition;
    "bpmn:Signal": BPMNModdle$Signal;
    "bpmn:ImplicitThrowEvent": BPMNModdle$ImplicitThrowEvent;
    "bpmn:DataState": BPMNModdle$DataState;
    "bpmn:ItemAwareElement": BPMNModdle$ItemAwareElement;
    "bpmn:DataAssociation": BPMNModdle$DataAssociation;
    "bpmn:DataInput": BPMNModdle$DataInput;
    "bpmn:DataOutput": BPMNModdle$DataOutput;
    "bpmn:InputSet": BPMNModdle$InputSet;
    "bpmn:OutputSet": BPMNModdle$OutputSet;
    "bpmn:Property": BPMNModdle$Property;
    "bpmn:DataInputAssociation": BPMNModdle$DataInputAssociation;
    "bpmn:DataOutputAssociation": BPMNModdle$DataOutputAssociation;
    "bpmn:InputOutputSpecification": BPMNModdle$InputOutputSpecification;
    "bpmn:DataObject": BPMNModdle$DataObject;
    "bpmn:InputOutputBinding": BPMNModdle$InputOutputBinding;
    "bpmn:Assignment": BPMNModdle$Assignment;
    "bpmn:DataStore": BPMNModdle$DataStore;
    "bpmn:DataStoreReference": BPMNModdle$DataStoreReference;
    "bpmn:DataObjectReference": BPMNModdle$DataObjectReference;
    "bpmn:ConversationLink": BPMNModdle$ConversationLink;
    "bpmn:ConversationAssociation": BPMNModdle$ConversationAssociation;
    "bpmn:CallConversation": BPMNModdle$CallConversation;
    "bpmn:Conversation": BPMNModdle$Conversation;
    "bpmn:SubConversation": BPMNModdle$SubConversation;
    "bpmn:ConversationNode": BPMNModdle$ConversationNode;
    "bpmn:GlobalConversation": BPMNModdle$GlobalConversation;
    "bpmn:PartnerEntity": BPMNModdle$PartnerEntity;
    "bpmn:PartnerRole": BPMNModdle$PartnerRole;
    "bpmn:CorrelationProperty": BPMNModdle$CorrelationProperty;
    "bpmn:Error": BPMNModdle$ErrorElement;
    "bpmn:CorrelationKey": BPMNModdle$CorrelationKey;
    "bpmn:Expression": BPMNModdle$Expression;
    "bpmn:FormalExpression": BPMNModdle$FormalExpression;
    "bpmn:Message": BPMNModdle$Message;
    "bpmn:ItemDefinition": BPMNModdle$ItemDefinition;
    "bpmn:FlowElement": BPMNModdle$FlowElement;
    "bpmn:SequenceFlow": BPMNModdle$SequenceFlow;
    "bpmn:FlowElementsContainer": BPMNModdle$FlowElementsContainer;
    "bpmn:CallableElement": BPMNModdle$CallableElement;
    "bpmn:FlowNode": BPMNModdle$FlowNode;
    "bpmn:CorrelationPropertyRetrievalExpression": BPMNModdle$CorrelationPropertyRetrievalExpression;
    "bpmn:CorrelationPropertyBinding": BPMNModdle$CorrelationPropertyBinding;
    "bpmn:Resource": BPMNModdle$Resource;
    "bpmn:ResourceParameter": BPMNModdle$ResourceParameter;
    "bpmn:CorrelationSubscription": BPMNModdle$CorrelationSubscription;
    "bpmn:MessageFlow": BPMNModdle$MessageFlow;
    "bpmn:MessageFlowAssociation": BPMNModdle$MessageFlowAssociation;
    "bpmn:InteractionNode": BPMNModdle$InteractionNode;
    "bpmn:Participant": BPMNModdle$Participant;
    "bpmn:ParticipantAssociation": BPMNModdle$ParticipantAssociation;
    "bpmn:ParticipantMultiplicity": BPMNModdle$ParticipantMultiplicity;
    "bpmn:Collaboration": BPMNModdle$Collaboration;
    "bpmn:ChoreographyActivity": BPMNModdle$ChoreographyActivity;
    "bpmn:CallChoreography": BPMNModdle$CallChoreography;
    "bpmn:SubChoreography": BPMNModdle$SubChoreography;
    "bpmn:ChoreographyTask": BPMNModdle$ChoreographyTask;
    "bpmn:Choreography": BPMNModdle$Choreography;
    "bpmn:GlobalChoreographyTask": BPMNModdle$GlobalChoreographyTask;
    "bpmn:TextAnnotation": BPMNModdle$TextAnnotation;
    "bpmn:Group": BPMNModdle$Group;
    "bpmn:Association": BPMNModdle$Association;
    "bpmn:Category": BPMNModdle$Category;
    "bpmn:Artifact": BPMNModdle$Artifact;
    "bpmn:CategoryValue": BPMNModdle$CategoryValue;
    "bpmn:Activity": BPMNModdle$Activity;
    "bpmn:ServiceTask": BPMNModdle$ServiceTask;
    "bpmn:SubProcess": BPMNModdle$SubProcess;
    "bpmn:LoopCharacteristics": BPMNModdle$LoopCharacteristics;
    "bpmn:MultiInstanceLoopCharacteristics": BPMNModdle$MultiInstanceLoopCharacteristics;
    "bpmn:StandardLoopCharacteristics": BPMNModdle$StandardLoopCharacteristics;
    "bpmn:CallActivity": BPMNModdle$CallActivity;
    "bpmn:Task": BPMNModdle$Task;
    "bpmn:SendTask": BPMNModdle$SendTask;
    "bpmn:ReceiveTask": BPMNModdle$ReceiveTask;
    "bpmn:ScriptTask": BPMNModdle$ScriptTask;
    "bpmn:BusinessRuleTask": BPMNModdle$BusinessRuleTask;
    "bpmn:AdHocSubProcess": BPMNModdle$AdHocSubProcess;
    "bpmn:Transaction": BPMNModdle$Transaction;
    "bpmn:GlobalScriptTask": BPMNModdle$GlobalScriptTask;
    "bpmn:GlobalBusinessRuleTask": BPMNModdle$GlobalBusinessRuleTask;
    "bpmn:ComplexBehaviorDefinition": BPMNModdle$ComplexBehaviorDefinition;
    "bpmn:ResourceRole": BPMNModdle$ResourceRole;
    "bpmn:ResourceParameterBinding": BPMNModdle$ResourceParameterBinding;
    "bpmn:ResourceAssignmentExpression": BPMNModdle$ResourceAssignmentExpression;
    "bpmn:Import": BPMNModdle$Import;
    "bpmn:Definitions": BPMNModdle$Definitions;
    "bpmndi:BPMNDiagram": BPMNModdle$BPMNDiagram;
    "bpmndi:BPMNPlane": BPMNModdle$BPMNPlane;
    "bpmndi:BPMNShape": BPMNModdle$BPMNShape;
    "bpmndi:BPMNEdge": BPMNModdle$BPMNEdge;
    "bpmndi:BPMNLabel": BPMNModdle$BPMNLabel;
    "bpmndi:BPMNLabelStyle": BPMNModdle$BPMNLabelStyle;
    "dc:boolean": boolean;
    "dc:number": number;
    "dc:Real": any;
    "dc:string": string;
    "dc:Font": BPMNModdle$Font;
    "dc:Point": BPMNModdle$Point;
    "dc:Bounds": BPMNModdle$Bounds;
    "di:DiagramElement": BPMNModdle$DiagramElement;
    "di:Node": BPMNModdle$Node;
    "di:Edge": BPMNModdle$Edge;
    "di:Diagram": BPMNModdle$Diagram;
    "di:Shape": BPMNModdle$Shape;
    "di:Plane": BPMNModdle$Plane;
    "di:LabeledEdge": BPMNModdle$LabeledEdge;
    "di:LabeledShape": BPMNModdle$LabeledShape;
    "di:Label": BPMNModdle$Label;
    "di:Style": BPMNModdle$Style;
    "di:Extension": BPMNModdle$Extension;
    "bioc:ColoredShape": BPMNModdle$ColoredShape;
    "bioc:ColoredEdge": BPMNModdle$ColoredEdge;
  }

  declare type BPMNModdle$ElementType = $Keys<BPMNModdle$ElementTypes>;

  declare interface BPMNModdle$Option {
    [key: string]: any;
  }

  declare interface BPMNModdle$BPMNModdleConstructor {
    new(packages?: any, options?: BPMNModdle$Option): BPMNModdle$BPMNModdle;
  }

  declare type BPMNModdle$ImportFn = (
    err: b3$Error,
    definitions: BPMNModdle$Definitions,
    parseContext: any
  ) => void;

  declare interface BPMNModdle$Moddle {
    /**
 * Create an instance of the specified type.
 * @example var foo = moddle.create('my:Foo');
var bar = moddle.create('my:Bar', { id: 'BAR_1' });
 * @param descriptor the type descriptor or name know to the model
 * @param attrs a number of attributes to initialize the model instance with
 * @return model instance
 */
    create<T, K: $Keys<T>>(descriptor: K, attrs?: any): $ElementType<T, K>;
    create(descriptor: any, attrs?: any): BPMNModdle$BaseElement;

    /**
 * Returns the type representing a given descriptor
 * @example var Foo = moddle.getType('my:Foo');
var foo = new Foo({ 'id' : 'FOO_1' });
 * @param descriptor the type descriptor or name know to the model
 * @return the type representing the descriptor
 */
    getType(descriptor: any): any;

    /**
 * Creates an any-element type to be used within model instances.
 * 
 * This can be used to create custom elements that lie outside the meta-model.
 * The created element contains all the meta-data required to serialize it
 * as part of meta-model elements.
 * @example var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
value: 'bar'
});

var container = moddle.create('my:Container', 'http://my', {
any: [ foo ]
});

// go ahead and serialize the stuff
 * @param name the name of the element
 * @param nsUri the namespace uri of the element
 * @param properties a map of properties to initialize the instance with
 * @return the any type instance
 */
    createAny(name: string, nsUri: string, properties: any): any;

    /**
     * Returns a registered package by uri or prefix
     * @return the package
     */
    getPackage(uriOrPrefix: any): any;

    /**
     * Returns a snapshot of all known packages
     * @return the package
     */
    getPackages(): any;

    /**
     * Returns the descriptor for an element
     */
    getElementDescriptor(element: any): any;

    /**
     * Returns true if the given descriptor or instance
     * represents the given type.
     *
     * May be applied to this, if element is omitted.
     */
    hasType(element: any, __esri$type: string): any;

    /**
     * Returns the descriptor of an elements named property
     */
    getPropertyDescriptor(element: any, property: any): any;

    /**
     * Returns a mapped type's descriptor
     */
    getTypeDescriptor(__esri$type: string): any;
  }

  declare type BPMNModdle$BPMNModdle = {
    /**
     * Instantiates a BPMN model tree from a given xml string.
     * @param xmlStr XML string
     * @param done done callback
     */
    fromXML(xmlStr: string, done: BPMNModdle$ImportFn): void,

    /**
     * Instantiates a BPMN model tree from a given xml string.
     * @param xmlStr XML string
     * @param options Options to pass to the underlying reader
     * @param done done callback
     */
    fromXML(
      xmlStr: string,
      options: BPMNModdle$Option,
      done: BPMNModdle$ImportFn
    ): void,

    /**
     * Instantiates a BPMN model tree from a given xml string.
     * @param xmlStr XML string
     * @param typeName Name of the root element
     * @param options Options to pass to the underlying reader
     * @param done done callback
     */
    fromXML(
      xmlStr: string,
      typeName: string,
      options: BPMNModdle$Option,
      done: BPMNModdle$ImportFn
    ): void
  } & BPMNModdle$Moddle;

  declare var BPMNModdle$BPMNModdle: BPMNModdle$BPMNModdle.BPMNModdle$BPMNModdleConstructor;
  declare module.exports: typeof BPMNModdle$BPMNModdle;
}
