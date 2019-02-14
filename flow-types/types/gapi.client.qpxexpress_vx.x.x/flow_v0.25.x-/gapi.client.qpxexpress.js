declare module "gapi.client.qpxexpress" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    trips: typeof gapi$client$trips
  };

  /**
   * Load QPX Express API v1
   */
  declare function gapi$client$load(
    name: "qpxexpress",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "qpxexpress",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$trips: qpxexpress$TripsResource;

  declare interface gapi$client$qpxexpress$AircraftData {
    /**
     * The aircraft code. For example, for a Boeing 777 the code would be 777.
     */
    code?: string;

    /**
     * Identifies this as an aircraftData object. Value: the fixed string qpxexpress#aircraftData
     */
    kind?: string;

    /**
     * The name of an aircraft, for example Boeing 777.
     */
    name?: string;
  }

  declare interface gapi$client$qpxexpress$AirportData {
    /**
     * The city code an airport is located in. For example, for JFK airport, this is NYC.
     */
    city?: string;

    /**
     * An airport's code. For example, for Boston Logan airport, this is BOS.
     */
    code?: string;

    /**
     * Identifies this as an airport object. Value: the fixed string qpxexpress#airportData.
     */
    kind?: string;

    /**
     * The name of an airport. For example, for airport BOS the name is "Boston Logan International".
     */
    name?: string;
  }

  declare interface gapi$client$qpxexpress$BagDescriptor {
    /**
     * Provides the commercial name for an optional service.
     */
    commercialName?: string;

    /**
     * How many of this type of bag will be checked on this flight.
     */
    count?: number;

    /**
     * A description of the baggage.
     */
    description?: string[];

    /**
     * Identifies this as a baggage object. Value: the fixed string qpxexpress#bagDescriptor.
     */
    kind?: string;

    /**
     * The standard IATA subcode used to identify this optional service.
     */
    subcode?: string;
  }

  declare interface gapi$client$qpxexpress$CarrierData {
    /**
     * The IATA designator of a carrier (airline, etc). For example, for American Airlines, the code is AA.
     */
    code?: string;

    /**
     * Identifies this as a kind of carrier (ie. an airline, bus line, railroad, etc). Value: the fixed string qpxexpress#carrierData.
     */
    kind?: string;

    /**
     * The long, full name of a carrier. For example: American Airlines.
     */
    name?: string;
  }

  declare interface gapi$client$qpxexpress$CityData {
    /**
     * The IATA character ID of a city. For example, for Boston this is BOS.
     */
    code?: string;

    /**
     * The two-character country code of the country the city is located in. For example, US for the United States of America.
     */
    country?: string;

    /**
     * Identifies this as a city, typically with one or more airports. Value: the fixed string qpxexpress#cityData.
     */
    kind?: string;

    /**
     * The full name of a city. An example would be: New York.
     */
    name?: string;
  }

  declare interface gapi$client$qpxexpress$Data {
    /**
     * The aircraft that is flying between an origin and destination.
     */
    aircraft?: gapi$client$qpxexpress$AircraftData[];

    /**
     * The airport of an origin or destination.
     */
    airport?: gapi$client$qpxexpress$AirportData[];

    /**
     * The airline carrier of the aircraft flying between an origin and destination. Allowed values are IATA carrier codes.
     */
    carrier?: gapi$client$qpxexpress$CarrierData[];

    /**
     * The city that is either the origin or destination of part of a trip.
     */
    city?: gapi$client$qpxexpress$CityData[];

    /**
     * Identifies this as QPX Express response resource, including a trip's airport, city, taxes, airline, and aircraft. Value: the fixed string
     * qpxexpress#data.
     */
    kind?: string;

    /**
     * The taxes due for flying between an origin and a destination.
     */
    tax?: qpxexpress$TaxData[];
  }

  declare interface gapi$client$qpxexpress$FareInfo {
    basisCode?: string;

    /**
     * The carrier of the aircraft or other vehicle commuting between two points.
     */
    carrier?: string;

    /**
     * The city code of the city the trip ends at.
     */
    destination?: string;

    /**
     * A unique identifier of the fare.
     */
    id?: string;

    /**
     * Identifies this as a fare object. Value: the fixed string qpxexpress#fareInfo.
     */
    kind?: string;

    /**
     * The city code of the city the trip begins at.
     */
    origin?: string;

    /**
     * Whether this is a private fare, for example one offered only to select customers rather than the general public.
     */
    private?: boolean;
  }

  declare interface gapi$client$qpxexpress$FlightInfo {
    carrier?: string;

    /**
     * The flight number.
     */
    number?: string;
  }

  declare interface gapi$client$qpxexpress$FreeBaggageAllowance {
    /**
     * A representation of a type of bag, such as an ATPCo subcode, Commercial Name, or other description.
     */
    bagDescriptor?: gapi$client$qpxexpress$BagDescriptor[];

    /**
     * The maximum number of kilos all the free baggage together may weigh.
     */
    kilos?: number;

    /**
     * The maximum number of kilos any one piece of baggage may weigh.
     */
    kilosPerPiece?: number;

    /**
     * Identifies this as free baggage object, allowed on one segment of a trip. Value: the fixed string qpxexpress#freeBaggageAllowance.
     */
    kind?: string;

    /**
     * The number of free pieces of baggage allowed.
     */
    pieces?: number;

    /**
     * The number of pounds of free baggage allowed.
     */
    pounds?: number;
  }

  declare interface gapi$client$qpxexpress$LegInfo {
    /**
     * The aircraft (or bus, ferry, railcar, etc) travelling between the two points of this leg.
     */
    aircraft?: string;

    /**
     * The scheduled time of arrival at the destination of the leg, local to the point of arrival.
     */
    arrivalTime?: string;

    /**
     * Whether you have to change planes following this leg. Only applies to the next leg.
     */
    changePlane?: boolean;

    /**
     * Duration of a connection following this leg, in minutes.
     */
    connectionDuration?: number;

    /**
     * The scheduled departure time of the leg, local to the point of departure.
     */
    departureTime?: string;

    /**
     * The leg destination as a city and airport.
     */
    destination?: string;

    /**
     * The terminal the flight is scheduled to arrive at.
     */
    destinationTerminal?: string;

    /**
     * The scheduled travelling time from the origin to the destination.
     */
    duration?: number;

    /**
     * An identifier that uniquely identifies this leg in the solution.
     */
    id?: string;

    /**
     * Identifies this as a leg object. A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set
     * points on a particular carrier with a particular flight number. Value: the fixed string qpxexpress#legInfo.
     */
    kind?: string;

    /**
     * A simple, general description of the meal(s) served on the flight, for example: "Hot meal".
     */
    meal?: string;

    /**
     * The number of miles in this leg.
     */
    mileage?: number;

    /**
     * In percent, the published on time performance on this leg.
     */
    onTimePerformance?: number;

    /**
     * Department of Transportation disclosure information on the actual operator of a flight in a code share. (A code share refers to a marketing agreement
     * between two carriers, where one carrier will list in its schedules (and take bookings for) flights that are actually operated by another carrier.)
     */
    operatingDisclosure?: string;

    /**
     * The leg origin as a city and airport.
     */
    origin?: string;

    /**
     * The terminal the flight is scheduled to depart from.
     */
    originTerminal?: string;

    /**
     * Whether passenger information must be furnished to the United States Transportation Security Administration (TSA) prior to departure.
     */
    secure?: boolean;
  }

  declare interface gapi$client$qpxexpress$PassengerCounts {
    /**
     * The number of passengers that are adults.
     */
    adultCount?: number;

    /**
     * The number of passengers that are children.
     */
    childCount?: number;

    /**
     * The number of passengers that are infants travelling in the lap of an adult.
     */
    infantInLapCount?: number;

    /**
     * The number of passengers that are infants each assigned a seat.
     */
    infantInSeatCount?: number;

    /**
     * Identifies this as a passenger count object, representing the number of passengers. Value: the fixed string qpxexpress#passengerCounts.
     */
    kind?: string;

    /**
     * The number of passengers that are senior citizens.
     */
    seniorCount?: number;
  }

  declare interface gapi$client$qpxexpress$PricingInfo {
    /**
     * The total fare in the base fare currency (the currency of the country of origin). This element is only present when the sales currency and the currency
     * of the country of commencement are different.
     */
    baseFareTotal?: string;

    /**
     * The fare used to price one or more segments.
     */
    fare?: gapi$client$qpxexpress$FareInfo[];

    /**
     * The horizontal fare calculation. This is a field on a ticket that displays all of the relevant items that go into the calculation of the fare.
     */
    fareCalculation?: string;

    /**
     * Identifies this as a pricing object, representing the price of one or more travel segments. Value: the fixed string qpxexpress#pricingInfo.
     */
    kind?: string;

    /**
     * The latest ticketing time for this pricing assuming the reservation occurs at ticketing time and there is no change in fares/rules. The time is local
     * to the point of sale (POS).
     */
    latestTicketingTime?: string;

    /**
     * The number of passengers to which this price applies.
     */
    passengers?: gapi$client$qpxexpress$PassengerCounts;

    /**
     * The passenger type code for this pricing. An alphanumeric code used by a carrier to restrict fares to certain categories of passenger. For instance, a
     * fare might be valid only for senior citizens.
     */
    ptc?: string;

    /**
     * Whether the fares on this pricing are refundable.
     */
    refundable?: boolean;

    /**
     * The total fare in the sale or equivalent currency.
     */
    saleFareTotal?: string;

    /**
     * The taxes in the sale or equivalent currency.
     */
    saleTaxTotal?: string;

    /**
     * Total per-passenger price (fare and tax) in the sale or equivalent currency.
     */
    saleTotal?: string;

    /**
     * The per-segment price and baggage information.
     */
    segmentPricing?: qpxexpress$SegmentPricing[];

    /**
     * The taxes used to calculate the tax total per ticket.
     */
    tax?: qpxexpress$TaxInfo[];
  }

  declare interface gapi$client$qpxexpress$SegmentInfo {
    /**
     * The booking code or class for this segment.
     */
    bookingCode?: string;

    /**
     * The number of seats available in this booking code on this segment.
     */
    bookingCodeCount?: number;

    /**
     * The cabin booked for this segment.
     */
    cabin?: string;

    /**
     * In minutes, the duration of the connection following this segment.
     */
    connectionDuration?: number;

    /**
     * The duration of the flight segment in minutes.
     */
    duration?: number;

    /**
     * The flight this is a segment of.
     */
    flight?: gapi$client$qpxexpress$FlightInfo;

    /**
     * An id uniquely identifying the segment in the solution.
     */
    id?: string;

    /**
     * Identifies this as a segment object. A segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to
     * OGG, could have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2). Value: the fixed string qpxexpress#segmentInfo.
     */
    kind?: string;

    /**
     * The legs composing this segment.
     */
    leg?: gapi$client$qpxexpress$LegInfo[];

    /**
     * The solution-based index of a segment in a married segment group. Married segments can only be booked together. For example, an airline might report a
     * certain booking code as sold out from Boston to Pittsburgh, but as available as part of two married segments Boston to Chicago connecting through
     * Pittsburgh. For example content of this field, consider the round-trip flight ZZ1 PHX-PHL ZZ2 PHL-CLT ZZ3 CLT-PHX. This has three segments, with the
     * two outbound ones (ZZ1 ZZ2) married. In this case, the two outbound segments belong to married segment group 0, and the return segment belongs to
     * married segment group 1.
     */
    marriedSegmentGroup?: string;

    /**
     * Whether the operation of this segment remains subject to government approval.
     */
    subjectToGovernmentApproval?: boolean;
  }

  declare interface gapi$client$qpxexpress$SegmentPricing {
    /**
     * A segment identifier unique within a single solution. It is used to refer to different parts of the same solution.
     */
    fareId?: string;

    /**
     * Details of the free baggage allowance on this segment.
     */
    freeBaggageOption?: gapi$client$qpxexpress$FreeBaggageAllowance[];

    /**
     * Identifies this as a segment pricing object, representing the price of this segment. Value: the fixed string qpxexpress#segmentPricing.
     */
    kind?: string;

    /**
     * Unique identifier in the response of this segment.
     */
    segmentId?: string;
  }

  declare interface gapi$client$qpxexpress$SliceInfo {
    /**
     * The duration of the slice in minutes.
     */
    duration?: number;

    /**
     * Identifies this as a slice object. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to
     * get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. Value: the fixed string qpxexpress#sliceInfo.
     */
    kind?: string;

    /**
     * The segment(s) constituting the slice.
     */
    segment?: gapi$client$qpxexpress$SegmentInfo[];
  }

  declare interface gapi$client$qpxexpress$SliceInput {
    /**
     * Slices with only the carriers in this alliance should be returned; do not use this field with permittedCarrier. Allowed values are ONEWORLD, SKYTEAM,
     * and STAR.
     */
    alliance?: string;

    /**
     * Departure date in YYYY-MM-DD format.
     */
    date?: string;

    /**
     * Airport or city IATA designator of the destination.
     */
    destination?: string;

    /**
     * Identifies this as a slice input object, representing the criteria a desired slice must satisfy. Value: the fixed string qpxexpress#sliceInput.
     */
    kind?: string;

    /**
     * The longest connection between two legs, in minutes, you are willing to accept.
     */
    maxConnectionDuration?: number;

    /**
     * The maximum number of stops you are willing to accept in this slice.
     */
    maxStops?: number;

    /**
     * Airport or city IATA designator of the origin.
     */
    origin?: string;

    /**
     * A list of 2-letter IATA airline designators. Slices with only these carriers should be returned.
     */
    permittedCarrier?: string[];

    /**
     * Slices must depart in this time of day range, local to the point of departure.
     */
    permittedDepartureTime?: qpxexpress$TimeOfDayRange;

    /**
     * Prefer solutions that book in this cabin for this slice. Allowed values are COACH, PREMIUM_COACH, BUSINESS, and FIRST.
     */
    preferredCabin?: string;

    /**
     * A list of 2-letter IATA airline designators. Exclude slices that use these carriers.
     */
    prohibitedCarrier?: string[];
  }

  declare interface gapi$client$qpxexpress$TaxData {
    /**
     * An identifier uniquely identifying a tax in a response.
     */
    id?: string;

    /**
     * Identifies this as a tax data object, representing some tax. Value: the fixed string qpxexpress#taxData.
     */
    kind?: string;

    /**
     * The name of a tax.
     */
    name?: string;
  }

  declare interface gapi$client$qpxexpress$TaxInfo {
    /**
     * Whether this is a government charge or a carrier surcharge.
     */
    chargeType?: string;

    /**
     * The code to enter in the ticket's tax box.
     */
    code?: string;

    /**
     * For government charges, the country levying the charge.
     */
    country?: string;

    /**
     * Identifier uniquely identifying this tax in a response. Not present for unnamed carrier surcharges.
     */
    id?: string;

    /**
     * Identifies this as a tax information object. Value: the fixed string qpxexpress#taxInfo.
     */
    kind?: string;

    /**
     * The price of the tax in the sales or equivalent currency.
     */
    salePrice?: string;
  }

  declare interface gapi$client$qpxexpress$TimeOfDayRange {
    /**
     * The earliest time of day in HH:MM format.
     */
    earliestTime?: string;

    /**
     * Identifies this as a time of day range object, representing two times in a single day defining a time range. Value: the fixed string
     * qpxexpress#timeOfDayRange.
     */
    kind?: string;

    /**
     * The latest time of day in HH:MM format.
     */
    latestTime?: string;
  }

  declare interface gapi$client$qpxexpress$TripOption {
    /**
     * Identifier uniquely identifying this trip in a response.
     */
    id?: string;

    /**
     * Identifies this as a trip information object. Value: the fixed string qpxexpress#tripOption.
     */
    kind?: string;

    /**
     * Per passenger pricing information.
     */
    pricing?: gapi$client$qpxexpress$PricingInfo[];

    /**
     * The total price for all passengers on the trip, in the form of a currency followed by an amount, e.g. USD253.35.
     */
    saleTotal?: string;

    /**
     * The slices that make up this trip's itinerary.
     */
    slice?: gapi$client$qpxexpress$SliceInfo[];
  }

  declare interface gapi$client$qpxexpress$TripOptionsRequest {
    /**
     * Do not return solutions that cost more than this price. The alphabetical part of the price is in ISO 4217. The format, in regex, is [A-Z]{3}\d+(\.\d+)?
     * Example: $102.07
     */
    maxPrice?: string;

    /**
     * Counts for each passenger type in the request.
     */
    passengers?: gapi$client$qpxexpress$PassengerCounts;

    /**
     * Return only solutions with refundable fares.
     */
    refundable?: boolean;

    /**
     * IATA country code representing the point of sale. This determines the "equivalent amount paid" currency for the ticket.
     */
    saleCountry?: string;

    /**
     * The slices that make up the itinerary of this trip. A slice represents a traveler's intent, the portion of a low-fare search corresponding to a
     * traveler's request to get between two points. One-way journeys are generally expressed using one slice, round-trips using two. An example of a one
     * slice trip with three segments might be BOS-SYD, SYD-LAX, LAX-BOS if the traveler only stopped in SYD and LAX just long enough to change planes.
     */
    slice?: gapi$client$qpxexpress$SliceInput[];

    /**
     * The number of solutions to return, maximum 500.
     */
    solutions?: number;

    /**
     * IATA country code representing the point of ticketing.
     */
    ticketingCountry?: string;
  }

  declare interface gapi$client$qpxexpress$TripOptionsResponse {
    /**
     * Informational data global to list of solutions.
     */
    data?: gapi$client$qpxexpress$Data;

    /**
     * Identifies this as a QPX Express trip response object, which consists of zero or more solutions. Value: the fixed string qpxexpress#tripOptions.
     */
    kind?: string;

    /**
     * An identifier uniquely identifying this response.
     */
    requestId?: string;

    /**
     * A list of priced itinerary solutions to the QPX Express query.
     */
    tripOption?: gapi$client$qpxexpress$TripOption[];
  }

  declare interface gapi$client$qpxexpress$TripsSearchRequest {
    /**
     * A QPX Express search request. Required values are at least one adult or senior passenger, an origin, a destination, and a date.
     */
    request?: gapi$client$qpxexpress$TripOptionsRequest;
  }

  declare interface gapi$client$qpxexpress$TripsSearchResponse {
    /**
     * Identifies this as a QPX Express API search response resource. Value: the fixed string qpxExpress#tripsSearch.
     */
    kind?: string;

    /**
     * All possible solutions to the QPX Express search request.
     */
    trips?: gapi$client$qpxexpress$TripOptionsResponse;
  }

  declare interface gapi$client$qpxexpress$TripsResource {
    /**
     * Returns a list of flights.
     */
    search(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$qpxexpress$TripsSearchResponse>;
  }
}
