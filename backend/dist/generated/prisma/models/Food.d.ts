import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FoodModel = runtime.Types.Result.DefaultSelection<Prisma.$FoodPayload>;
export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null;
    _avg: FoodAvgAggregateOutputType | null;
    _sum: FoodSumAggregateOutputType | null;
    _min: FoodMinAggregateOutputType | null;
    _max: FoodMaxAggregateOutputType | null;
};
export type FoodAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    restaurantId: number | null;
};
export type FoodSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    restaurantId: number | null;
};
export type FoodMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    type: string | null;
    expirationDate: Date | null;
    restaurantId: number | null;
    createdAt: Date | null;
};
export type FoodMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    type: string | null;
    expirationDate: Date | null;
    restaurantId: number | null;
    createdAt: Date | null;
};
export type FoodCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    type: number;
    expirationDate: number;
    restaurantId: number;
    createdAt: number;
    _all: number;
};
export type FoodAvgAggregateInputType = {
    id?: true;
    price?: true;
    restaurantId?: true;
};
export type FoodSumAggregateInputType = {
    id?: true;
    price?: true;
    restaurantId?: true;
};
export type FoodMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    type?: true;
    expirationDate?: true;
    restaurantId?: true;
    createdAt?: true;
};
export type FoodMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    type?: true;
    expirationDate?: true;
    restaurantId?: true;
    createdAt?: true;
};
export type FoodCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    type?: true;
    expirationDate?: true;
    restaurantId?: true;
    createdAt?: true;
    _all?: true;
};
export type FoodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodWhereInput;
    orderBy?: Prisma.FoodOrderByWithRelationInput | Prisma.FoodOrderByWithRelationInput[];
    cursor?: Prisma.FoodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FoodCountAggregateInputType;
    _avg?: FoodAvgAggregateInputType;
    _sum?: FoodSumAggregateInputType;
    _min?: FoodMinAggregateInputType;
    _max?: FoodMaxAggregateInputType;
};
export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
    [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFood[P]> : Prisma.GetScalarType<T[P], AggregateFood[P]>;
};
export type FoodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodWhereInput;
    orderBy?: Prisma.FoodOrderByWithAggregationInput | Prisma.FoodOrderByWithAggregationInput[];
    by: Prisma.FoodScalarFieldEnum[] | Prisma.FoodScalarFieldEnum;
    having?: Prisma.FoodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FoodCountAggregateInputType | true;
    _avg?: FoodAvgAggregateInputType;
    _sum?: FoodSumAggregateInputType;
    _min?: FoodMinAggregateInputType;
    _max?: FoodMaxAggregateInputType;
};
export type FoodGroupByOutputType = {
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date;
    restaurantId: number;
    createdAt: Date;
    _count: FoodCountAggregateOutputType | null;
    _avg: FoodAvgAggregateOutputType | null;
    _sum: FoodSumAggregateOutputType | null;
    _min: FoodMinAggregateOutputType | null;
    _max: FoodMaxAggregateOutputType | null;
};
type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FoodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FoodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FoodGroupByOutputType[P]>;
}>>;
export type FoodWhereInput = {
    AND?: Prisma.FoodWhereInput | Prisma.FoodWhereInput[];
    OR?: Prisma.FoodWhereInput[];
    NOT?: Prisma.FoodWhereInput | Prisma.FoodWhereInput[];
    id?: Prisma.IntFilter<"Food"> | number;
    name?: Prisma.StringFilter<"Food"> | string;
    description?: Prisma.StringFilter<"Food"> | string;
    price?: Prisma.FloatFilter<"Food"> | number;
    type?: Prisma.StringFilter<"Food"> | string;
    expirationDate?: Prisma.DateTimeFilter<"Food"> | Date | string;
    restaurantId?: Prisma.IntFilter<"Food"> | number;
    createdAt?: Prisma.DateTimeFilter<"Food"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    requests?: Prisma.FoodRequestListRelationFilter;
};
export type FoodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    restaurant?: Prisma.UserOrderByWithRelationInput;
    requests?: Prisma.FoodRequestOrderByRelationAggregateInput;
};
export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FoodWhereInput | Prisma.FoodWhereInput[];
    OR?: Prisma.FoodWhereInput[];
    NOT?: Prisma.FoodWhereInput | Prisma.FoodWhereInput[];
    name?: Prisma.StringFilter<"Food"> | string;
    description?: Prisma.StringFilter<"Food"> | string;
    price?: Prisma.FloatFilter<"Food"> | number;
    type?: Prisma.StringFilter<"Food"> | string;
    expirationDate?: Prisma.DateTimeFilter<"Food"> | Date | string;
    restaurantId?: Prisma.IntFilter<"Food"> | number;
    createdAt?: Prisma.DateTimeFilter<"Food"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    requests?: Prisma.FoodRequestListRelationFilter;
}, "id">;
export type FoodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FoodCountOrderByAggregateInput;
    _avg?: Prisma.FoodAvgOrderByAggregateInput;
    _max?: Prisma.FoodMaxOrderByAggregateInput;
    _min?: Prisma.FoodMinOrderByAggregateInput;
    _sum?: Prisma.FoodSumOrderByAggregateInput;
};
export type FoodScalarWhereWithAggregatesInput = {
    AND?: Prisma.FoodScalarWhereWithAggregatesInput | Prisma.FoodScalarWhereWithAggregatesInput[];
    OR?: Prisma.FoodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FoodScalarWhereWithAggregatesInput | Prisma.FoodScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Food"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Food"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Food"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Food"> | number;
    type?: Prisma.StringWithAggregatesFilter<"Food"> | string;
    expirationDate?: Prisma.DateTimeWithAggregatesFilter<"Food"> | Date | string;
    restaurantId?: Prisma.IntWithAggregatesFilter<"Food"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Food"> | Date | string;
};
export type FoodCreateInput = {
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    createdAt?: Date | string;
    restaurant: Prisma.UserCreateNestedOneWithoutFoodsInput;
    requests?: Prisma.FoodRequestCreateNestedManyWithoutFoodInput;
};
export type FoodUncheckedCreateInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    restaurantId: number;
    createdAt?: Date | string;
    requests?: Prisma.FoodRequestUncheckedCreateNestedManyWithoutFoodInput;
};
export type FoodUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.UserUpdateOneRequiredWithoutFoodsNestedInput;
    requests?: Prisma.FoodRequestUpdateManyWithoutFoodNestedInput;
};
export type FoodUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requests?: Prisma.FoodRequestUncheckedUpdateManyWithoutFoodNestedInput;
};
export type FoodCreateManyInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    restaurantId: number;
    createdAt?: Date | string;
};
export type FoodUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodListRelationFilter = {
    every?: Prisma.FoodWhereInput;
    some?: Prisma.FoodWhereInput;
    none?: Prisma.FoodWhereInput;
};
export type FoodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FoodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
};
export type FoodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
};
export type FoodScalarRelationFilter = {
    is?: Prisma.FoodWhereInput;
    isNot?: Prisma.FoodWhereInput;
};
export type FoodCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput> | Prisma.FoodCreateWithoutRestaurantInput[] | Prisma.FoodUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRestaurantInput | Prisma.FoodCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.FoodCreateManyRestaurantInputEnvelope;
    connect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
};
export type FoodUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput> | Prisma.FoodCreateWithoutRestaurantInput[] | Prisma.FoodUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRestaurantInput | Prisma.FoodCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.FoodCreateManyRestaurantInputEnvelope;
    connect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
};
export type FoodUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput> | Prisma.FoodCreateWithoutRestaurantInput[] | Prisma.FoodUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRestaurantInput | Prisma.FoodCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.FoodUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.FoodUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.FoodCreateManyRestaurantInputEnvelope;
    set?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    disconnect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    delete?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    connect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    update?: Prisma.FoodUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.FoodUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.FoodUpdateManyWithWhereWithoutRestaurantInput | Prisma.FoodUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.FoodScalarWhereInput | Prisma.FoodScalarWhereInput[];
};
export type FoodUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput> | Prisma.FoodCreateWithoutRestaurantInput[] | Prisma.FoodUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRestaurantInput | Prisma.FoodCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.FoodUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.FoodUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.FoodCreateManyRestaurantInputEnvelope;
    set?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    disconnect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    delete?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    connect?: Prisma.FoodWhereUniqueInput | Prisma.FoodWhereUniqueInput[];
    update?: Prisma.FoodUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.FoodUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.FoodUpdateManyWithWhereWithoutRestaurantInput | Prisma.FoodUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.FoodScalarWhereInput | Prisma.FoodScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FoodCreateNestedOneWithoutRequestsInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRequestsInput, Prisma.FoodUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRequestsInput;
    connect?: Prisma.FoodWhereUniqueInput;
};
export type FoodUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.FoodCreateWithoutRequestsInput, Prisma.FoodUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.FoodCreateOrConnectWithoutRequestsInput;
    upsert?: Prisma.FoodUpsertWithoutRequestsInput;
    connect?: Prisma.FoodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FoodUpdateToOneWithWhereWithoutRequestsInput, Prisma.FoodUpdateWithoutRequestsInput>, Prisma.FoodUncheckedUpdateWithoutRequestsInput>;
};
export type FoodCreateWithoutRestaurantInput = {
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    createdAt?: Date | string;
    requests?: Prisma.FoodRequestCreateNestedManyWithoutFoodInput;
};
export type FoodUncheckedCreateWithoutRestaurantInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    createdAt?: Date | string;
    requests?: Prisma.FoodRequestUncheckedCreateNestedManyWithoutFoodInput;
};
export type FoodCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.FoodWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput>;
};
export type FoodCreateManyRestaurantInputEnvelope = {
    data: Prisma.FoodCreateManyRestaurantInput | Prisma.FoodCreateManyRestaurantInput[];
};
export type FoodUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.FoodWhereUniqueInput;
    update: Prisma.XOR<Prisma.FoodUpdateWithoutRestaurantInput, Prisma.FoodUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.FoodCreateWithoutRestaurantInput, Prisma.FoodUncheckedCreateWithoutRestaurantInput>;
};
export type FoodUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.FoodWhereUniqueInput;
    data: Prisma.XOR<Prisma.FoodUpdateWithoutRestaurantInput, Prisma.FoodUncheckedUpdateWithoutRestaurantInput>;
};
export type FoodUpdateManyWithWhereWithoutRestaurantInput = {
    where: Prisma.FoodScalarWhereInput;
    data: Prisma.XOR<Prisma.FoodUpdateManyMutationInput, Prisma.FoodUncheckedUpdateManyWithoutRestaurantInput>;
};
export type FoodScalarWhereInput = {
    AND?: Prisma.FoodScalarWhereInput | Prisma.FoodScalarWhereInput[];
    OR?: Prisma.FoodScalarWhereInput[];
    NOT?: Prisma.FoodScalarWhereInput | Prisma.FoodScalarWhereInput[];
    id?: Prisma.IntFilter<"Food"> | number;
    name?: Prisma.StringFilter<"Food"> | string;
    description?: Prisma.StringFilter<"Food"> | string;
    price?: Prisma.FloatFilter<"Food"> | number;
    type?: Prisma.StringFilter<"Food"> | string;
    expirationDate?: Prisma.DateTimeFilter<"Food"> | Date | string;
    restaurantId?: Prisma.IntFilter<"Food"> | number;
    createdAt?: Prisma.DateTimeFilter<"Food"> | Date | string;
};
export type FoodCreateWithoutRequestsInput = {
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    createdAt?: Date | string;
    restaurant: Prisma.UserCreateNestedOneWithoutFoodsInput;
};
export type FoodUncheckedCreateWithoutRequestsInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    restaurantId: number;
    createdAt?: Date | string;
};
export type FoodCreateOrConnectWithoutRequestsInput = {
    where: Prisma.FoodWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodCreateWithoutRequestsInput, Prisma.FoodUncheckedCreateWithoutRequestsInput>;
};
export type FoodUpsertWithoutRequestsInput = {
    update: Prisma.XOR<Prisma.FoodUpdateWithoutRequestsInput, Prisma.FoodUncheckedUpdateWithoutRequestsInput>;
    create: Prisma.XOR<Prisma.FoodCreateWithoutRequestsInput, Prisma.FoodUncheckedCreateWithoutRequestsInput>;
    where?: Prisma.FoodWhereInput;
};
export type FoodUpdateToOneWithWhereWithoutRequestsInput = {
    where?: Prisma.FoodWhereInput;
    data: Prisma.XOR<Prisma.FoodUpdateWithoutRequestsInput, Prisma.FoodUncheckedUpdateWithoutRequestsInput>;
};
export type FoodUpdateWithoutRequestsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.UserUpdateOneRequiredWithoutFoodsNestedInput;
};
export type FoodUncheckedUpdateWithoutRequestsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodCreateManyRestaurantInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    type: string;
    expirationDate: Date | string;
    createdAt?: Date | string;
};
export type FoodUpdateWithoutRestaurantInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requests?: Prisma.FoodRequestUpdateManyWithoutFoodNestedInput;
};
export type FoodUncheckedUpdateWithoutRestaurantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requests?: Prisma.FoodRequestUncheckedUpdateManyWithoutFoodNestedInput;
};
export type FoodUncheckedUpdateManyWithoutRestaurantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodCountOutputType = {
    requests: number;
};
export type FoodCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requests?: boolean | FoodCountOutputTypeCountRequestsArgs;
};
export type FoodCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodCountOutputTypeSelect<ExtArgs> | null;
};
export type FoodCountOutputTypeCountRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodRequestWhereInput;
};
export type FoodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    type?: boolean;
    expirationDate?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    requests?: boolean | Prisma.Food$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.FoodCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["food"]>;
export type FoodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    type?: boolean;
    expirationDate?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["food"]>;
export type FoodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    type?: boolean;
    expirationDate?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["food"]>;
export type FoodSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    type?: boolean;
    expirationDate?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
};
export type FoodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "price" | "type" | "expirationDate" | "restaurantId" | "createdAt", ExtArgs["result"]["food"]>;
export type FoodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    requests?: boolean | Prisma.Food$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.FoodCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FoodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FoodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FoodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Food";
    objects: {
        restaurant: Prisma.$UserPayload<ExtArgs>;
        requests: Prisma.$FoodRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string;
        price: number;
        type: string;
        expirationDate: Date;
        restaurantId: number;
        createdAt: Date;
    }, ExtArgs["result"]["food"]>;
    composites: {};
};
export type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FoodPayload, S>;
export type FoodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FoodCountAggregateInputType | true;
};
export interface FoodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Food'];
        meta: {
            name: 'Food';
        };
    };
    findUnique<T extends FoodFindUniqueArgs>(args: Prisma.SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FoodFindFirstArgs>(args?: Prisma.SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FoodFindManyArgs>(args?: Prisma.SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FoodCreateArgs>(args: Prisma.SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FoodCreateManyArgs>(args?: Prisma.SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FoodDeleteArgs>(args: Prisma.SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FoodUpdateArgs>(args: Prisma.SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FoodDeleteManyArgs>(args?: Prisma.SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FoodUpdateManyArgs>(args: Prisma.SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FoodUpsertArgs>(args: Prisma.SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FoodCountArgs>(args?: Prisma.Subset<T, FoodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FoodCountAggregateOutputType> : number>;
    aggregate<T extends FoodAggregateArgs>(args: Prisma.Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>;
    groupBy<T extends FoodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FoodGroupByArgs['orderBy'];
    } : {
        orderBy?: FoodGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FoodFieldRefs;
}
export interface Prisma__FoodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requests<T extends Prisma.Food$requestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Food$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FoodFieldRefs {
    readonly id: Prisma.FieldRef<"Food", 'Int'>;
    readonly name: Prisma.FieldRef<"Food", 'String'>;
    readonly description: Prisma.FieldRef<"Food", 'String'>;
    readonly price: Prisma.FieldRef<"Food", 'Float'>;
    readonly type: Prisma.FieldRef<"Food", 'String'>;
    readonly expirationDate: Prisma.FieldRef<"Food", 'DateTime'>;
    readonly restaurantId: Prisma.FieldRef<"Food", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Food", 'DateTime'>;
}
export type FoodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where: Prisma.FoodWhereUniqueInput;
};
export type FoodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where: Prisma.FoodWhereUniqueInput;
};
export type FoodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where?: Prisma.FoodWhereInput;
    orderBy?: Prisma.FoodOrderByWithRelationInput | Prisma.FoodOrderByWithRelationInput[];
    cursor?: Prisma.FoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodScalarFieldEnum | Prisma.FoodScalarFieldEnum[];
};
export type FoodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where?: Prisma.FoodWhereInput;
    orderBy?: Prisma.FoodOrderByWithRelationInput | Prisma.FoodOrderByWithRelationInput[];
    cursor?: Prisma.FoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodScalarFieldEnum | Prisma.FoodScalarFieldEnum[];
};
export type FoodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where?: Prisma.FoodWhereInput;
    orderBy?: Prisma.FoodOrderByWithRelationInput | Prisma.FoodOrderByWithRelationInput[];
    cursor?: Prisma.FoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodScalarFieldEnum | Prisma.FoodScalarFieldEnum[];
};
export type FoodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodCreateInput, Prisma.FoodUncheckedCreateInput>;
};
export type FoodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FoodCreateManyInput | Prisma.FoodCreateManyInput[];
};
export type FoodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    data: Prisma.FoodCreateManyInput | Prisma.FoodCreateManyInput[];
    include?: Prisma.FoodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FoodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodUpdateInput, Prisma.FoodUncheckedUpdateInput>;
    where: Prisma.FoodWhereUniqueInput;
};
export type FoodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FoodUpdateManyMutationInput, Prisma.FoodUncheckedUpdateManyInput>;
    where?: Prisma.FoodWhereInput;
    limit?: number;
};
export type FoodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodUpdateManyMutationInput, Prisma.FoodUncheckedUpdateManyInput>;
    where?: Prisma.FoodWhereInput;
    limit?: number;
    include?: Prisma.FoodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FoodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where: Prisma.FoodWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodCreateInput, Prisma.FoodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FoodUpdateInput, Prisma.FoodUncheckedUpdateInput>;
};
export type FoodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
    where: Prisma.FoodWhereUniqueInput;
};
export type FoodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodWhereInput;
    limit?: number;
};
export type Food$requestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    where?: Prisma.FoodRequestWhereInput;
    orderBy?: Prisma.FoodRequestOrderByWithRelationInput | Prisma.FoodRequestOrderByWithRelationInput[];
    cursor?: Prisma.FoodRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodRequestScalarFieldEnum | Prisma.FoodRequestScalarFieldEnum[];
};
export type FoodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodSelect<ExtArgs> | null;
    omit?: Prisma.FoodOmit<ExtArgs> | null;
    include?: Prisma.FoodInclude<ExtArgs> | null;
};
export {};
