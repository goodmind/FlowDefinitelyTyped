declare module 'jest-when' {
        declare export interface When {
(fn: jest.Mocked<T> | jest.Mock<T>): When,
calledWith(...matchers: any[]): When,
expectCalledWith(...matchers: any[]): When,
mockReturnValue: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When,
mockReturnValueOnce: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When,
mockResolvedValue: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When,
mockResolvedValueOnce: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When,
mockRejectedValue: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When,
mockRejectedValueOnce: (value: any) => $ElementType<jest.MockInstance<any>, "mockReturnValue"> & When
} 
	declare export var when: When;
    }
