import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FoodRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$FoodRequestPayload>;
export type AggregateFoodRequest = {
    _count: FoodRequestCountAggregateOutputType | null;
    _avg: FoodRequestAvgAggregateOutputType | null;
    _sum: FoodRequestSumAggregateOutputType | null;
    _min: FoodRequestMinAggregateOutputType | null;
    _max: FoodRequestMaxAggregateOutputType | null;
};
export type FoodRequestAvgAggregateOutputType = {
    id: number | null;
    foodId: number | null;
    userId: number | null;
};
export type FoodRequestSumAggregateOutputType = {
    id: number | null;
    foodId: number | null;
    userId: number | null;
};
export type FoodRequestMinAggregateOutputType = {
    id: number | null;
    foodId: number | null;
    userId: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type FoodRequestMaxAggregateOutputType = {
    id: number | null;
    foodId: number | null;
    userId: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type FoodRequestCountAggregateOutputType = {
    id: number;
    foodId: number;
    userId: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type FoodRequestAvgAggregateInputType = {
    id?: true;
    foodId?: true;
    userId?: true;
};
export type FoodRequestSumAggregateInputType = {
    id?: true;
    foodId?: true;
    userId?: true;
};
export type FoodRequestMinAggregateInputType = {
    id?: true;
    foodId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
};
export type FoodRequestMaxAggregateInputType = {
    id?: true;
    foodId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
};
export type FoodRequestCountAggregateInputType = {
    id?: true;
    foodId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type FoodRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodRequestWhereInput;
    orderBy?: Prisma.FoodRequestOrderByWithRelationInput | Prisma.FoodRequestOrderByWithRelationInput[];
    cursor?: Prisma.FoodRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FoodRequestCountAggregateInputType;
    _avg?: FoodRequestAvgAggregateInputType;
    _sum?: FoodRequestSumAggregateInputType;
    _min?: FoodRequestMinAggregateInputType;
    _max?: FoodRequestMaxAggregateInputType;
};
export type GetFoodRequestAggregateType<T extends FoodRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateFoodRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFoodRequest[P]> : Prisma.GetScalarType<T[P], AggregateFoodRequest[P]>;
};
export type FoodRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodRequestWhereInput;
    orderBy?: Prisma.FoodRequestOrderByWithAggregationInput | Prisma.FoodRequestOrderByWithAggregationInput[];
    by: Prisma.FoodRequestScalarFieldEnum[] | Prisma.FoodRequestScalarFieldEnum;
    having?: Prisma.FoodRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FoodRequestCountAggregateInputType | true;
    _avg?: FoodRequestAvgAggregateInputType;
    _sum?: FoodRequestSumAggregateInputType;
    _min?: FoodRequestMinAggregateInputType;
    _max?: FoodRequestMaxAggregateInputType;
};
export type FoodRequestGroupByOutputType = {
    id: number;
    foodId: number;
    userId: number;
    status: string;
    createdAt: Date;
    _count: FoodRequestCountAggregateOutputType | null;
    _avg: FoodRequestAvgAggregateOutputType | null;
    _sum: FoodRequestSumAggregateOutputType | null;
    _min: FoodRequestMinAggregateOutputType | null;
    _max: FoodRequestMaxAggregateOutputType | null;
};
type GetFoodRequestGroupByPayload<T extends FoodRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FoodRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FoodRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FoodRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FoodRequestGroupByOutputType[P]>;
}>>;
export type FoodRequestWhereInput = {
    AND?: Prisma.FoodRequestWhereInput | Prisma.FoodRequestWhereInput[];
    OR?: Prisma.FoodRequestWhereInput[];
    NOT?: Prisma.FoodRequestWhereInput | Prisma.FoodRequestWhereInput[];
    id?: Prisma.IntFilter<"FoodRequest"> | number;
    foodId?: Prisma.IntFilter<"FoodRequest"> | number;
    userId?: Prisma.IntFilter<"FoodRequest"> | number;
    status?: Prisma.StringFilter<"FoodRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"FoodRequest"> | Date | string;
    food?: Prisma.XOR<Prisma.FoodScalarRelationFilter, Prisma.FoodWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FoodRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    food?: Prisma.FoodOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type FoodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FoodRequestWhereInput | Prisma.FoodRequestWhereInput[];
    OR?: Prisma.FoodRequestWhereInput[];
    NOT?: Prisma.FoodRequestWhereInput | Prisma.FoodRequestWhereInput[];
    foodId?: Prisma.IntFilter<"FoodRequest"> | number;
    userId?: Prisma.IntFilter<"FoodRequest"> | number;
    status?: Prisma.StringFilter<"FoodRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"FoodRequest"> | Date | string;
    food?: Prisma.XOR<Prisma.FoodScalarRelationFilter, Prisma.FoodWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type FoodRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FoodRequestCountOrderByAggregateInput;
    _avg?: Prisma.FoodRequestAvgOrderByAggregateInput;
    _max?: Prisma.FoodRequestMaxOrderByAggregateInput;
    _min?: Prisma.FoodRequestMinOrderByAggregateInput;
    _sum?: Prisma.FoodRequestSumOrderByAggregateInput;
};
export type FoodRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.FoodRequestScalarWhereWithAggregatesInput | Prisma.FoodRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.FoodRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FoodRequestScalarWhereWithAggregatesInput | Prisma.FoodRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FoodRequest"> | number;
    foodId?: Prisma.IntWithAggregatesFilter<"FoodRequest"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"FoodRequest"> | number;
    status?: Prisma.StringWithAggregatesFilter<"FoodRequest"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FoodRequest"> | Date | string;
};
export type FoodRequestCreateInput = {
    status: string;
    createdAt?: Date | string;
    food: Prisma.FoodCreateNestedOneWithoutRequestsInput;
    user: Prisma.UserCreateNestedOneWithoutRequestsInput;
};
export type FoodRequestUncheckedCreateInput = {
    id?: number;
    foodId: number;
    userId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestUpdateInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    food?: Prisma.FoodUpdateOneRequiredWithoutRequestsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRequestsNestedInput;
};
export type FoodRequestUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    foodId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestCreateManyInput = {
    id?: number;
    foodId: number;
    userId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestUpdateManyMutationInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    foodId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestListRelationFilter = {
    every?: Prisma.FoodRequestWhereInput;
    some?: Prisma.FoodRequestWhereInput;
    none?: Prisma.FoodRequestWhereInput;
};
export type FoodRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FoodRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodRequestAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type FoodRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodRequestSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    foodId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type FoodRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput> | Prisma.FoodRequestCreateWithoutUserInput[] | Prisma.FoodRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutUserInput | Prisma.FoodRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FoodRequestCreateManyUserInputEnvelope;
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
};
export type FoodRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput> | Prisma.FoodRequestCreateWithoutUserInput[] | Prisma.FoodRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutUserInput | Prisma.FoodRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FoodRequestCreateManyUserInputEnvelope;
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
};
export type FoodRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput> | Prisma.FoodRequestCreateWithoutUserInput[] | Prisma.FoodRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutUserInput | Prisma.FoodRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FoodRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.FoodRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FoodRequestCreateManyUserInputEnvelope;
    set?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    disconnect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    delete?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    update?: Prisma.FoodRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.FoodRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FoodRequestUpdateManyWithWhereWithoutUserInput | Prisma.FoodRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
};
export type FoodRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput> | Prisma.FoodRequestCreateWithoutUserInput[] | Prisma.FoodRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutUserInput | Prisma.FoodRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FoodRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.FoodRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FoodRequestCreateManyUserInputEnvelope;
    set?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    disconnect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    delete?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    update?: Prisma.FoodRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.FoodRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FoodRequestUpdateManyWithWhereWithoutUserInput | Prisma.FoodRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
};
export type FoodRequestCreateNestedManyWithoutFoodInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput> | Prisma.FoodRequestCreateWithoutFoodInput[] | Prisma.FoodRequestUncheckedCreateWithoutFoodInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutFoodInput | Prisma.FoodRequestCreateOrConnectWithoutFoodInput[];
    createMany?: Prisma.FoodRequestCreateManyFoodInputEnvelope;
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
};
export type FoodRequestUncheckedCreateNestedManyWithoutFoodInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput> | Prisma.FoodRequestCreateWithoutFoodInput[] | Prisma.FoodRequestUncheckedCreateWithoutFoodInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutFoodInput | Prisma.FoodRequestCreateOrConnectWithoutFoodInput[];
    createMany?: Prisma.FoodRequestCreateManyFoodInputEnvelope;
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
};
export type FoodRequestUpdateManyWithoutFoodNestedInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput> | Prisma.FoodRequestCreateWithoutFoodInput[] | Prisma.FoodRequestUncheckedCreateWithoutFoodInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutFoodInput | Prisma.FoodRequestCreateOrConnectWithoutFoodInput[];
    upsert?: Prisma.FoodRequestUpsertWithWhereUniqueWithoutFoodInput | Prisma.FoodRequestUpsertWithWhereUniqueWithoutFoodInput[];
    createMany?: Prisma.FoodRequestCreateManyFoodInputEnvelope;
    set?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    disconnect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    delete?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    update?: Prisma.FoodRequestUpdateWithWhereUniqueWithoutFoodInput | Prisma.FoodRequestUpdateWithWhereUniqueWithoutFoodInput[];
    updateMany?: Prisma.FoodRequestUpdateManyWithWhereWithoutFoodInput | Prisma.FoodRequestUpdateManyWithWhereWithoutFoodInput[];
    deleteMany?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
};
export type FoodRequestUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput> | Prisma.FoodRequestCreateWithoutFoodInput[] | Prisma.FoodRequestUncheckedCreateWithoutFoodInput[];
    connectOrCreate?: Prisma.FoodRequestCreateOrConnectWithoutFoodInput | Prisma.FoodRequestCreateOrConnectWithoutFoodInput[];
    upsert?: Prisma.FoodRequestUpsertWithWhereUniqueWithoutFoodInput | Prisma.FoodRequestUpsertWithWhereUniqueWithoutFoodInput[];
    createMany?: Prisma.FoodRequestCreateManyFoodInputEnvelope;
    set?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    disconnect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    delete?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    connect?: Prisma.FoodRequestWhereUniqueInput | Prisma.FoodRequestWhereUniqueInput[];
    update?: Prisma.FoodRequestUpdateWithWhereUniqueWithoutFoodInput | Prisma.FoodRequestUpdateWithWhereUniqueWithoutFoodInput[];
    updateMany?: Prisma.FoodRequestUpdateManyWithWhereWithoutFoodInput | Prisma.FoodRequestUpdateManyWithWhereWithoutFoodInput[];
    deleteMany?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
};
export type FoodRequestCreateWithoutUserInput = {
    status: string;
    createdAt?: Date | string;
    food: Prisma.FoodCreateNestedOneWithoutRequestsInput;
};
export type FoodRequestUncheckedCreateWithoutUserInput = {
    id?: number;
    foodId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput>;
};
export type FoodRequestCreateManyUserInputEnvelope = {
    data: Prisma.FoodRequestCreateManyUserInput | Prisma.FoodRequestCreateManyUserInput[];
};
export type FoodRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FoodRequestUpdateWithoutUserInput, Prisma.FoodRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FoodRequestCreateWithoutUserInput, Prisma.FoodRequestUncheckedCreateWithoutUserInput>;
};
export type FoodRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FoodRequestUpdateWithoutUserInput, Prisma.FoodRequestUncheckedUpdateWithoutUserInput>;
};
export type FoodRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FoodRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FoodRequestUpdateManyMutationInput, Prisma.FoodRequestUncheckedUpdateManyWithoutUserInput>;
};
export type FoodRequestScalarWhereInput = {
    AND?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
    OR?: Prisma.FoodRequestScalarWhereInput[];
    NOT?: Prisma.FoodRequestScalarWhereInput | Prisma.FoodRequestScalarWhereInput[];
    id?: Prisma.IntFilter<"FoodRequest"> | number;
    foodId?: Prisma.IntFilter<"FoodRequest"> | number;
    userId?: Prisma.IntFilter<"FoodRequest"> | number;
    status?: Prisma.StringFilter<"FoodRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"FoodRequest"> | Date | string;
};
export type FoodRequestCreateWithoutFoodInput = {
    status: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRequestsInput;
};
export type FoodRequestUncheckedCreateWithoutFoodInput = {
    id?: number;
    userId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestCreateOrConnectWithoutFoodInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput>;
};
export type FoodRequestCreateManyFoodInputEnvelope = {
    data: Prisma.FoodRequestCreateManyFoodInput | Prisma.FoodRequestCreateManyFoodInput[];
};
export type FoodRequestUpsertWithWhereUniqueWithoutFoodInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FoodRequestUpdateWithoutFoodInput, Prisma.FoodRequestUncheckedUpdateWithoutFoodInput>;
    create: Prisma.XOR<Prisma.FoodRequestCreateWithoutFoodInput, Prisma.FoodRequestUncheckedCreateWithoutFoodInput>;
};
export type FoodRequestUpdateWithWhereUniqueWithoutFoodInput = {
    where: Prisma.FoodRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FoodRequestUpdateWithoutFoodInput, Prisma.FoodRequestUncheckedUpdateWithoutFoodInput>;
};
export type FoodRequestUpdateManyWithWhereWithoutFoodInput = {
    where: Prisma.FoodRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FoodRequestUpdateManyMutationInput, Prisma.FoodRequestUncheckedUpdateManyWithoutFoodInput>;
};
export type FoodRequestCreateManyUserInput = {
    id?: number;
    foodId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestUpdateWithoutUserInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    food?: Prisma.FoodUpdateOneRequiredWithoutRequestsNestedInput;
};
export type FoodRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    foodId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    foodId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestCreateManyFoodInput = {
    id?: number;
    userId: number;
    status: string;
    createdAt?: Date | string;
};
export type FoodRequestUpdateWithoutFoodInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRequestsNestedInput;
};
export type FoodRequestUncheckedUpdateWithoutFoodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestUncheckedUpdateManyWithoutFoodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    foodId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodRequest"]>;
export type FoodRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    foodId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodRequest"]>;
export type FoodRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    foodId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodRequest"]>;
export type FoodRequestSelectScalar = {
    id?: boolean;
    foodId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type FoodRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "foodId" | "userId" | "status" | "createdAt", ExtArgs["result"]["foodRequest"]>;
export type FoodRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FoodRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FoodRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    food?: boolean | Prisma.FoodDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FoodRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FoodRequest";
    objects: {
        food: Prisma.$FoodPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        foodId: number;
        userId: number;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["foodRequest"]>;
    composites: {};
};
export type FoodRequestGetPayload<S extends boolean | null | undefined | FoodRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload, S>;
export type FoodRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FoodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FoodRequestCountAggregateInputType | true;
};
export interface FoodRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FoodRequest'];
        meta: {
            name: 'FoodRequest';
        };
    };
    findUnique<T extends FoodRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, FoodRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FoodRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FoodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FoodRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, FoodRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FoodRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FoodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FoodRequestFindManyArgs>(args?: Prisma.SelectSubset<T, FoodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FoodRequestCreateArgs>(args: Prisma.SelectSubset<T, FoodRequestCreateArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FoodRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, FoodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FoodRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FoodRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FoodRequestDeleteArgs>(args: Prisma.SelectSubset<T, FoodRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FoodRequestUpdateArgs>(args: Prisma.SelectSubset<T, FoodRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FoodRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, FoodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FoodRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, FoodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FoodRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FoodRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FoodRequestUpsertArgs>(args: Prisma.SelectSubset<T, FoodRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__FoodRequestClient<runtime.Types.Result.GetResult<Prisma.$FoodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FoodRequestCountArgs>(args?: Prisma.Subset<T, FoodRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FoodRequestCountAggregateOutputType> : number>;
    aggregate<T extends FoodRequestAggregateArgs>(args: Prisma.Subset<T, FoodRequestAggregateArgs>): Prisma.PrismaPromise<GetFoodRequestAggregateType<T>>;
    groupBy<T extends FoodRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FoodRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: FoodRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FoodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FoodRequestFieldRefs;
}
export interface Prisma__FoodRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    food<T extends Prisma.FoodDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FoodDefaultArgs<ExtArgs>>): Prisma.Prisma__FoodClient<runtime.Types.Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FoodRequestFieldRefs {
    readonly id: Prisma.FieldRef<"FoodRequest", 'Int'>;
    readonly foodId: Prisma.FieldRef<"FoodRequest", 'Int'>;
    readonly userId: Prisma.FieldRef<"FoodRequest", 'Int'>;
    readonly status: Prisma.FieldRef<"FoodRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FoodRequest", 'DateTime'>;
}
export type FoodRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    where: Prisma.FoodRequestWhereUniqueInput;
};
export type FoodRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    where: Prisma.FoodRequestWhereUniqueInput;
};
export type FoodRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FoodRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FoodRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FoodRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodRequestCreateInput, Prisma.FoodRequestUncheckedCreateInput>;
};
export type FoodRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FoodRequestCreateManyInput | Prisma.FoodRequestCreateManyInput[];
};
export type FoodRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    data: Prisma.FoodRequestCreateManyInput | Prisma.FoodRequestCreateManyInput[];
    include?: Prisma.FoodRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FoodRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodRequestUpdateInput, Prisma.FoodRequestUncheckedUpdateInput>;
    where: Prisma.FoodRequestWhereUniqueInput;
};
export type FoodRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FoodRequestUpdateManyMutationInput, Prisma.FoodRequestUncheckedUpdateManyInput>;
    where?: Prisma.FoodRequestWhereInput;
    limit?: number;
};
export type FoodRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodRequestUpdateManyMutationInput, Prisma.FoodRequestUncheckedUpdateManyInput>;
    where?: Prisma.FoodRequestWhereInput;
    limit?: number;
    include?: Prisma.FoodRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FoodRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    where: Prisma.FoodRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodRequestCreateInput, Prisma.FoodRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FoodRequestUpdateInput, Prisma.FoodRequestUncheckedUpdateInput>;
};
export type FoodRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
    where: Prisma.FoodRequestWhereUniqueInput;
};
export type FoodRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodRequestWhereInput;
    limit?: number;
};
export type FoodRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodRequestSelect<ExtArgs> | null;
    omit?: Prisma.FoodRequestOmit<ExtArgs> | null;
    include?: Prisma.FoodRequestInclude<ExtArgs> | null;
};
export {};
