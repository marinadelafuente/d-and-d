import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
	/** Saved items view on */
	showSaved: boolean;
}>;

export default ContainerProps;
