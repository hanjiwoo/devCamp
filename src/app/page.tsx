"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

const Man = z.object({
  name: z.string(),
  email: z.string(),
  number: z.number(),
  select: z.string(),
});

type Inputs = {
  name: string;
  email: string;
  number: number;
  select: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // const result = Man.parse({
    //   name: watch("name"),
    //   email: watch("email"),
    //   number: watch("number"),
    // });
    // console.log(result);
    alert(`${JSON.stringify(data)} 요정보 제출됐어요`);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-orange-500 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[400px]  bg-white flex flex-col gap-5 justify-start p-[10px]"
      >
        <h1 className="text-4xl font-black">계정을 생성합니다.</h1>
        <h3>필수 정보를 입력해 볼게요</h3>
        <p>이름</p>

        <Input
          type="text"
          placeholder="홍길동"
          {...register("name", { required: true })}
        />
        {errors.name && <span>이름 써주시라요</span>}
        <p>이메일</p>
        <Input
          type="email"
          placeholder="이메일"
          {...register("email", { required: true })}
        />
        {errors.email && <span>이메일 적어주세요</span>}
        <p>연락처</p>
        <Input
          type="number"
          placeholder="01000000000"
          {...register("number", { required: true })}
        />
        {errors.number && <span>번호적어주세요</span>}
        <p>역할</p>
        <Select {...register("select")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="역할을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gwan">관리자</SelectItem>
            <SelectItem value="normal">일반사용자</SelectItem>
          </SelectContent>
        </Select>
        {errors.select && <span>사용자 선택해주세요</span>}

        <Button type="submit">버튼이당</Button>
      </form>
    </div>
  );
}
