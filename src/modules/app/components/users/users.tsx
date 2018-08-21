import * as React from "react";
import * as css from "./theme/users.css";
import * as hrCss from "./theme/hr.child.css";
import { themr } from "react-css-themr";
import { Component, ComponentClass, Fragment } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { Search } from "../../../ui-kit/components/search/search";
import { UserCard } from "../user-card/user-card";
import { TUser } from "../../../../models/User";
import { Option, some } from "fp-ts/lib/Option";
import { Hr } from "../../../ui-kit/components/hr/hr";

export type TRawUsersProps = {
  theme: MakeTheme<"container">;
  data: TUser[];
  selectedUser: Option<TUser>;
  onSelect: (user: Option<TUser>) => void;
};

type TUsersState = {
  search: string;
};

export class RawUsers extends Component<TRawUsersProps, TUsersState> {
  state = {
    search: ""
  };

  render() {
    const { theme, data, selectedUser } = this.props;
    const { search } = this.state;

    const selectedUserId = selectedUser.map(el => el.id).toNullable();

    const filtredData = data.filter(el =>
      el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
      <div className={theme.container}>
        <Search onChange={this.handleInputChange} />
        <Hr />

        {filtredData.map(el => {
          const isSelected = selectedUserId === el.id;

          return (
            <Fragment key={el.id}>
              <UserCard
                user={el}
                isSelected={isSelected}
                onSelect={this.handleSelect}
              />

              <Hr theme={hrCss} />
            </Fragment>
          );
        })}
      </div>
    );
  }

  handleSelect = (user: TUser) => {
    const { onSelect } = this.props;

    onSelect(some(user));
  };

  handleInputChange = (search: string) => {
    console.log("search", search);
    this.setState({ search });
  };
}

const defaultTheme = {
  ...css
};

export type TUsersProps = ObjectOptional<TRawUsersProps, "theme">;

export const Users: ComponentClass<TUsersProps> = themr("Users", defaultTheme)(
  RawUsers
);
